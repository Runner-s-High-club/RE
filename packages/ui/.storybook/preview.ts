import type { Preview } from '@storybook/react';
import { Colors, Fonts } from '../src/common/styles/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: { ...Colors, ...Fonts },
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];
