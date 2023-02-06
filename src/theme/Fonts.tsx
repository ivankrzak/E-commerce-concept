import { Global } from '@emotion/react'
import { FontFamily, FontUrl } from 'constants/fonts'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: ${FontFamily.SpaceGroteskLight};
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${FontUrl['Space Grotesk Light']}) format('TrueType'), url(${FontUrl['Space Grotesk Light']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.SpaceGrotesk};
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${FontUrl['Space Grotesk']}) format('TrueType'), url(${FontUrl['Space Grotesk']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.SpaceGroteskMedium};
        font-style: normal;
        font-weight: 500 ;
        font-display: swap;
        src: url(${FontUrl['Space Grotesk Medium']}) format('TrueType'), url(${FontUrl['Space Grotesk Medium']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.SpaceGroteskSemiBold};
        font-style: normal;
        font-weight: 600 ;
        font-display: swap;
        src: url(${FontUrl['Space Grotesk Semibold']}) format('TrueType'), url(${FontUrl['Space Grotesk Semibold']}) format('ttf');
      }
      @font-face {
        font-family: ${FontFamily.SpaceGroteskBold};
        font-style: normal;
        font-weight: 700 ;
        font-display: swap;
        src: url(${FontUrl['Space Grotesk Bold']}) format('TrueType'), url(${FontUrl['Space Grotesk Bold']}) format('ttf');
      }
      `}
  />
)
