export const MOCK_TAGS = [
  'NFT',
  'Metaverse',
  'Sustainable',
  'Sonder',
  'FOMO',
  'Ghosting',
] as const;

export const APP_CONFIG = {
  name: 'Wortionary',
  logo: {
    src: '/task1/logo.png',
    alt: 'Wortionary Logo',
    width: 40,
    height: 40,
  },
  hero: {
    background: '/task1/hero-bg.png',
    title: 'Search for words, phrases and meanings',
  },
  search: {
    placeholder: 'Type to search...',
    headerPlaceholder: 'search',
  },
} as const;