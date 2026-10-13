import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const PORT = 5173;
const LOCAL_URL = `http://localhost:${PORT}`;

// Potential locations for the cloudflared executable
const cloudflaredCandidatePaths = [
  path.join(process.cwd(), 'bin', 'cloudflared.exe'),
  path.join(os.tmpdir(), 'node-untun', 'cloudflared.2026.7.2.exe'),
  path.join(os.tmpdir(), 'node-untun', 'cloudflared.exe'),
  path.join(os.homedir(), '.cloudflared', 'cloudflared.exe'),
];

function findCloudflared() {
  for (const p of cloudflaredCandidatePaths) {
    if (fs.existsSync(p)) {
      try {
        const stats = fs.statSync(p);
        if (stats.size > 20 * 1024 * 1024) { // Valid binary should be > 20MB
          return p;
        }
      } catch {
        // continue
      }
    }
  }
  return null;
}

function isPortOpen(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, () => {
      resolve(true);
    });
    req.on('error', () => {
      resolve(false);
    });
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitForServer(port, maxRetries = 20) {
  for (let i = 0; i < maxRetries; i++) {
    const open = await isPortOpen(port);
    if (open) return true;
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

async function main() {
  console.log('\n🔍 Initializing Dental Hub Live Sharing with Cloudflare...');

  let viteProcess = null;
  const isViteRunning = await isPortOpen(PORT);

  if (!isViteRunning) {
    console.log(`⚡ Vite dev server not detected on port ${PORT}. Starting dev server...`);
    viteProcess = spawn('npm.cmd', ['run', 'dev'], {
      stdio: 'pipe',
      shell: true,
      cwd: process.cwd()
    });

    viteProcess.stdout?.on('data', (d) => {
      const msg = d.toString();
      if (msg.includes('ready in') || msg.includes('Local:')) {
        // dev server ready
      }
    });

    const ready = await waitForServer(PORT);
    if (!ready) {
      console.error('❌ Failed to start Vite dev server on port', PORT);
      process.exit(1);
    }
    console.log(`✅ Vite dev server is running at ${LOCAL_URL}`);
  } else {
    console.log(`✅ Detected active Vite dev server at ${LOCAL_URL}`);
  }

  // Find Cloudflared binary
  let cloudflaredBin = findCloudflared();
  if (!cloudflaredBin) {
    console.log('⏳ Cloudflare tunnel binary is finishing setup...');
    // Poll for binary in case download is still in final seconds
    for (let i = 0; i < 30; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      cloudflaredBin = findCloudflared();
      if (cloudflaredBin) break;
    }
  }

  if (!cloudflaredBin) {
    console.error('❌ Cloudflare binary not found. Please wait a moment or ensure cloudflared is downloaded.');
    if (viteProcess) viteProcess.kill();
    process.exit(1);
  }

  console.log('🚀 Launching Cloudflare Tunnel...');
  const tunnelProcess = spawn(
    cloudflaredBin,
    ['tunnel', '--url', `http://localhost:${PORT}`],
    { stdio: ['ignore', 'pipe', 'pipe'] }
  );

  let linkGenerated = false;

  const handleTunnelOutput = (data) => {
    const text = data.toString();
    const match = text.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
    if (match && !linkGenerated) {
      linkGenerated = true;
      const shareUrl = match[0];

      console.log('\n' + '='.repeat(66));
      console.log('   🎉 THE DENTAL HUB - PUBLIC CLOUDFLARE SHARE LINK READY! 🎉');
      console.log('='.repeat(66));
      console.log(`  🏠 Local URL:   ${LOCAL_URL}`);
      console.log(`  🌐 Public Link: ${shareUrl}`);
      console.log('='.repeat(66));
      console.log('  👉 Share the Public Link with anyone across any device or network.');
      console.log('  Press Ctrl + C anytime to stop sharing.');
      console.log('='.repeat(66) + '\n');
    }
  };

  tunnelProcess.stdout?.on('data', handleTunnelOutput);
  tunnelProcess.stderr?.on('data', handleTunnelOutput);

  const cleanup = () => {
    console.log('\n🛑 Stopping Cloudflare Tunnel and dev processes...');
    try {
      tunnelProcess.kill();
    } catch {}
    if (viteProcess) {
      try {
        viteProcess.kill();
      } catch {}
    }
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
