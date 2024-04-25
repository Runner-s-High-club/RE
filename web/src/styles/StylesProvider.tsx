'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import GlobalStyles from '@/styles/globalStyle';

/** 스타일 컴포넌트 provider */
export default function StylesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
