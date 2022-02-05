import HotspotIcon from './icon.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const ExampleHotspotQR = {
  name: 'Controllino Hotspot QR',
  icon: HotspotIcon,
  onboardType: 'QR',
  translations: {
    en: {
      externalOnboard: 'Please open your dashboard and scan the QR code that you just generated.',
    },
    ja: {},
    ko: {},
    zh: {},
  },
  antenna: {
    default: ANTENNAS.CTRL_EU,
  },
} as MakerHotspot

export default { ExampleHotspotQR }
