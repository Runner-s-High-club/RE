import 'styled-components';
import { theme } from '@/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      outline: string;
      outlineActive: string;
      outlineHover: string;
      primary: string;
      primaryActive: string;
      primaryHover: string;
      ghost_FontColor: string;
      disabled_bg: string;
      disabled_color: string;
      success: string;
      info: string;
      warning: string;
      danger: string;

      bg_gray000: string;
      bg_gray100: string;
      bg_gray200: string;
      bg_gray300: string;

      text_4e5968: string;
      text_333: string;
      text_gray0: string;
      text_gray1: string;
      text_gray2: string;
      text_gray3: string;
      text_gray4: string;
      text_gray5: string;
      text_gray6: string;
      text_gray7: string;
      text_gray8: string;
    };
    fonts: {
      button_L: string;
      button_M: string;
      button_S: string;

      text_13: string;
      text_17: string;
    };
  }
}
