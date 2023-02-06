export enum FontFamily {
  SpaceGroteskLight = 'Space Grotesk Light',
  SpaceGrotesk = 'Space Grotesk',
  SpaceGroteskMedium = 'Space Grotesk Medium',
  SpaceGroteskSemiBold = 'Space Grotesk Semibold',
  SpaceGroteskBold = 'Space Grotesk Bold',
}

export const FontUrl: Record<FontFamily, string> = {
  [FontFamily.SpaceGroteskLight]: '/fonts/Space-Grotesk/SpaceGrotesk-Light.ttf',
  [FontFamily.SpaceGrotesk]: '/fonts/Space-Grotesk/SpaceGrotesk-Regular.ttf',
  [FontFamily.SpaceGroteskMedium]:
    '/fonts/Space-Grotesk/SpaceGrotesk-Medium.ttf',
  [FontFamily.SpaceGroteskSemiBold]:
    '/fonts/Space-Grotesk/SpaceGrotesk-SemiBold.ttf',
  [FontFamily.SpaceGroteskBold]: '/fonts/Space-Grotesk/SpaceGrotesk-Bold.ttf',
}
