import HotspotIcon from './icon.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const ExampleHotspotQR = {
  name: 'Controllino Hotspot QR',
  icon: HotspotIcon,
  onboardType: 'QR',
  translations: {
    en: {
      externalOnboard: 'Please generate your QR code in the dashboard.',
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
