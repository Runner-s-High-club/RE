import styled, { css } from 'styled-components';
import {
  ButtonProps,
  Variant,
  buttonSize,
} from '@/components/button/interface/button.interface';

const primaryStyle = css`
  border: none;
  background-color: ${({ theme }) => theme.colors?.primary};
  color: ${({ theme }) => theme.colors?.bg_gray000};
  &:hover {
    background-color: ${({ theme }) => theme.colors?.primaryHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors?.primaryActive};
  }

  &:disabled {
    filter: grayscale(15%);
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors?.disabled_bg};
    color: ${({ theme }) => theme.colors?.disabled_color};
    border: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors?.disabled_bg};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors?.disabled_bg};
    }
  }
  transition: 0.1s background ease-in, 0.1s color ease-in;
  &:focus-visible {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

const outlineStyle = css`
  background-color: ${({ theme }) => theme.colors?.outline};
  border-color: ${({ theme }) => theme.colors?.primary};
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.colors?.primary};
  &:hover {
    border-color: ${({ theme }) => theme.colors?.outlineHover};
    background-color: ${({ theme }) => theme.colors?.outline};
  }
  &:active {
    border-color: ${({ theme }) => theme.colors?.outlineActive};
    background-color: ${({ theme }) => theme.colors?.outline};
  }
`;

const variants = {
  primaryStyle: { style: primaryStyle },
  outlineStyle: { style: outlineStyle },
};

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const IconBox = styled.div``;

export const Space = styled.div`
  margin-bottom: 10px;
`;

export const commonStyle = css`
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  font-family: inherit;
  &:disabled {
    filter: grayscale(15%);
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors?.disabled_bg};
    color: ${({ theme }) => theme.colors?.disabled_color};
    border: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors?.disabled_bg};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors?.disabled_bg};
    }
  }
  transition: 0.1s background ease-in, 0.1s color ease-in;
  &:focus-visible {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

interface CommonButtonProps {
  $size: buttonSize;
  $radius: number;
}

export const ButtonStyles = css<CommonButtonProps>`
  // 버튼 사이즈
  width: ${(props) => (props.$size ? sizeSets[props.$size].width : '100px')};
  height: ${(props) => (props.$size ? sizeSets[props.$size].height : 'auto')};
`;

export const Button = styled.button<CommonButtonProps & { $variant: Variant }>`
  ${commonStyle};
  ${ButtonStyles};
  ${(props) => props.$variant && variants[props.$variant].style};
  border-radius: ${(props) => (props.$radius ? props.$radius : 5)}px;
`;

const fontSizeL = css<ButtonProps>`
  ${({ theme }) => theme.fonts?.button_L};
`;

const fontSizeM = css<ButtonProps>`
  ${({ theme }) => theme.fonts?.button_M};
`;

const fontSizeS = css<ButtonProps>`
  ${({ theme }) => theme.fonts?.button_S};
`;

export const sizeSets = {
  S: {
    fontSize: fontSizeS,
    width: '25%',
    height: '50px',
  },
  M: {
    fontSize: fontSizeM,
    width: '45%',
    height: '50px',
  },
  L: {
    fontSize: fontSizeL,
    width: '100%',
    height: '50px',
  },
};
