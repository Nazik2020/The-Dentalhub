export interface ClinicLiveStatus {
  state: 'open_now' | 'open_today' | 'closed_after_hours'
  isOpenNow: boolean
  isAfterHours: boolean
  topBarStatusText: string
  topBarMobileText: string
  heroBadgeText: string
  heroBadgeMobileText: string
}

/**
 * Evaluates current time in Sri Lanka (Asia/Colombo, UTC+5:30) against the clinic's real schedule:
 * - Mon–Fri: 4:30 PM – 8:30 PM (16:30 – 20:30)
 * - Saturday: 9:00 AM – 12:00 PM (09:00 – 12:00) & 4:30 PM – 8:30 PM (16:30 – 20:30)
 * - Sunday: 4:00 PM – 8:30 PM (16:00 – 20:30)
 */
export function getClinicLiveStatus(now = new Date()): ClinicLiveStatus {
  // Convert current time to Sri Lanka Standard Time (Asia/Colombo)
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Colombo',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  const parts = formatter.formatToParts(now)
  const weekday = parts.find((p) => p.type === 'weekday')?.value || 'Mon'
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '12', 10)
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10)
  const totalMinutes = (hour === 24 ? 0 : hour) * 60 + minute

  const isSaturday = weekday === 'Sat'
  const isSunday = weekday === 'Sun'

  // Saturday schedule: 9:00 AM – 12:00 PM (540–720) & 4:30 PM – 8:30 PM (990–1230)
  if (isSaturday) {
    if (totalMinutes >= 540 && totalMinutes < 720) {
      return {
        state: 'open_now',
        isOpenNow: true,
        isAfterHours: false,
        topBarStatusText: 'Open now • Morning session until 12:00 PM',
        topBarMobileText: 'Open now • Until 12:00 PM',
        heroBadgeText: 'Open now (Until 12:00 PM & 4:30–8:30 PM) | Emergency priority',
        heroBadgeMobileText: 'Open now (Until 12:00 PM) • Emergency priority',
      }
    }
    if (totalMinutes >= 990 && totalMinutes < 1230) {
      return {
        state: 'open_now',
        isOpenNow: true,
        isAfterHours: false,
        topBarStatusText: 'Open now • Evening session until 8:30 PM',
        topBarMobileText: 'Open now • Until 8:30 PM',
        heroBadgeText: 'Open now (Until 8:30 PM) | Emergency cases priority',
        heroBadgeMobileText: 'Open now (Until 8:30 PM) • Emergency priority',
      }
    }
    if (totalMinutes < 540) {
      return {
        state: 'open_today',
        isOpenNow: false,
        isAfterHours: false,
        topBarStatusText: 'Open today • Opens at 9:00 AM',
        topBarMobileText: 'Open today • From 9:00 AM',
        heroBadgeText: 'Open today at 9:00 AM | Emergency cases priority',
        heroBadgeMobileText: 'Open today at 9:00 AM • Emergency priority',
      }
    }
    if (totalMinutes >= 720 && totalMinutes < 990) {
      return {
        state: 'open_today',
        isOpenNow: false,
        isAfterHours: false,
        topBarStatusText: 'Open today • Evening session starts at 4:30 PM',
        topBarMobileText: 'Reopens today • 4:30 PM',
        heroBadgeText: 'Reopens today at 4:30 PM | Emergency cases priority',
        heroBadgeMobileText: 'Reopens today at 4:30 PM • Emergency priority',
      }
    }
    // After 8:30 PM on Saturday -> Sunday opens at 4:00 PM
    return {
      state: 'closed_after_hours',
      isOpenNow: false,
      isAfterHours: true,
      topBarStatusText: 'Closed for tonight • Opens tomorrow at 4:00 PM',
      topBarMobileText: 'Opens tomorrow • 4:00 PM',
      heroBadgeText: 'Closed for tonight • Opens Sun 4:00 PM | Online booking open',
      heroBadgeMobileText: 'Opens Sun 4:00 PM • Online booking open',
    }
  }

  // Sunday schedule: 4:00 PM – 8:30 PM (960–1230)
  if (isSunday) {
    if (totalMinutes >= 960 && totalMinutes < 1230) {
      return {
        state: 'open_now',
        isOpenNow: true,
        isAfterHours: false,
        topBarStatusText: 'Open now • Sunday session until 8:30 PM',
        topBarMobileText: 'Open now • Until 8:30 PM',
        heroBadgeText: 'Open now (Until 8:30 PM) | Emergency cases priority',
        heroBadgeMobileText: 'Open now (Until 8:30 PM) • Emergency priority',
      }
    }
    if (totalMinutes < 960) {
      return {
        state: 'open_today',
        isOpenNow: false,
        isAfterHours: false,
        topBarStatusText: 'Open today • 4:00 PM – 8:30 PM',
        topBarMobileText: 'Open today • 4:00–8:30 PM',
        heroBadgeText: 'Open today (4:00 PM – 8:30 PM) | Emergency cases priority',
        heroBadgeMobileText: 'Open today (4:00–8:30 PM) • Emergency priority',
      }
    }
    // After 8:30 PM on Sunday -> Monday opens at 4:30 PM
    return {
      state: 'closed_after_hours',
      isOpenNow: false,
      isAfterHours: true,
      topBarStatusText: 'Closed for tonight • Opens tomorrow at 4:30 PM',
      topBarMobileText: 'Opens tomorrow • 4:30 PM',
      heroBadgeText: 'Closed for tonight • Opens Mon 4:30 PM | Online booking open',
      heroBadgeMobileText: 'Opens Mon 4:30 PM • Online booking open',
    }
  }

  // Monday – Friday schedule: 4:30 PM – 8:30 PM (990–1230)
  if (totalMinutes >= 990 && totalMinutes < 1230) {
    return {
      state: 'open_now',
      isOpenNow: true,
      isAfterHours: false,
      topBarStatusText: 'Open now • Closes at 8:30 PM',
      topBarMobileText: 'Open now • Until 8:30 PM',
      heroBadgeText: 'Open now (Until 8:30 PM) | Emergency cases priority',
      heroBadgeMobileText: 'Open now (Until 8:30 PM) • Emergency priority',
    }
  }

  if (totalMinutes < 990) {
    return {
      state: 'open_today',
      isOpenNow: false,
      isAfterHours: false,
      topBarStatusText: 'Open today • 4:30 PM – 8:30 PM',
      topBarMobileText: 'Open today • 4:30–8:30 PM',
      heroBadgeText: 'Open today (4:30 PM – 8:30 PM) | Emergency cases priority',
      heroBadgeMobileText: 'Open today (4:30–8:30 PM) • Emergency priority',
    }
  }

  // After 8:30 PM on Friday -> Saturday opens at 9:00 AM; otherwise 4:30 PM
  const nextOpenTime = weekday === 'Fri' ? '9:00 AM' : '4:30 PM'
  return {
    state: 'closed_after_hours',
    isOpenNow: false,
    isAfterHours: true,
    topBarStatusText: `Closed for tonight • Opens tomorrow at ${nextOpenTime}`,
    topBarMobileText: `Opens tomorrow • ${nextOpenTime}`,
    heroBadgeText: `Closed for tonight • Opens tomorrow at ${nextOpenTime} | Online booking open`,
    heroBadgeMobileText: `Opens tomorrow ${nextOpenTime} • Online booking open`,
  }
}

export const CLINIC_INFO = {
  name: 'THE DENTAL HUB',
  tagline: 'Creating smiles, with gentle care in Galle.',
  doctorName: 'Dr. Kanishka Mudalige',
  doctorCredentials: 'BDS (Peradeniya), MSc Implantology, FIADFE',
  location: {
    address: '185 Hirimbura Road, Kahaduwawatta, Galle 80000, Sri Lanka',
    landmark: 'Hirimbura Road (Near Nawinna Rd Junction), Galle',
    city: 'Galle',
    country: 'Sri Lanka',
    postalCode: '80000',
    coordinates: {
      lat: 6.0636039,
      lng: 80.2151958,
    },
    googleMapsPlaceUrl:
      'https://www.google.com/maps/place/The+Dental+Hub+by+Dr.+Kanishka+Mudalige/@6.0636039,80.2126209,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae173395176614d:0xf917a8232e79c85c',
  },
  contact: {
    phone: '+94 71 986 8990',
    phoneDisplay: '+94 71 986 8990',
    whatsapp: '+94719868990',
    whatsappDisplay: '+94 71 986 8990',
    email: 'care@thedentalhubgalle.com',
  },
  hours: {
    weekdays: 'Mon – Fri: 4:30 PM – 8:30 PM',
    saturday: 'Sat: 9:00 AM – 12:00 PM & 4:30 PM – 8:30 PM',
    sunday: 'Sun: 4:00 PM – 8:30 PM',
    emergencyText: 'Emergency dental cases prioritized on-call',
  },
  reviews: {
    averageRating: 4.9,
    reviewCount: 66,
    googlePlaceId: '0x3ae173395176614d:0xf917a8232e79c85c',
    googleRatingText: '4.9/5.0 from 66+ Google Reviews',
    highlights: [
      { label: 'Reasonable charges', count: 9 },
      { label: 'Nerve fillings', count: 3 },
      { label: 'Orthodontic treatment', count: 3 },
      { label: 'Clean interior', count: 3 },
    ],
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/94719868990',
  },
}
