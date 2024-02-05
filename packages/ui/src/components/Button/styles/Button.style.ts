import styled, { css } from 'styled-components';
import { ButtonProps } from '../interface/Button.interface';

const primaryStyle = css`
  border: none;
  background-color: ${({ theme }) => theme.colors?.primary};
  color: ${({ theme }) => theme.colors?.default};
  :hover {
    background-color: ${({ theme }) => theme.colors?.primaryHover};
  }
  :active {
    background-color: ${({ theme }) => theme.colors?.primaryActive};
  }
`;

const outlineStyle = css`
  background-color: ${({ theme }) => theme.colors?.default};
  border-color: ${({ theme }) => theme.colors?.primary};
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.colors?.primary};
  :hover {
    background-color: ${({ theme }) => theme.colors?.defaultHover};
  }
  :active {
    background-color: ${({ theme }) => theme.colors?.defaultActive};
  }
`;

const ghostStyle = css`
  background-color: ${({ theme }) => theme.colors?.default};
  border: 1px solid ${({ theme }) => theme.colors?.ghost};
  color: ${({ theme }) => theme.colors?.ghost_FontColor};
  :hover {
    background-color: ${({ theme }) => theme.colors?.ghostHover};
  }
  :active {
    background-color: ${({ theme }) => theme.colors?.ghostActive};
  }
`;

const variants = {
  primaryStyle: { style: primaryStyle },
  defaultStyle: { style: outlineStyle },
  ghostStyle: { style: ghostStyle },
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

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const commonStyle = css<ButtonProps>`
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
    :hover {
      background-color: ${({ theme }) => theme.colors?.disabled_bg};
    }
    :active {
      background-color: ${({ theme }) => theme.colors?.disabled_bg};
    }
  }
  transition: 0.1s background ease-in, 0.1s color ease-in;
  &:focus-visible {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonStyles = css<ButtonProps>`
  // 버튼 사이즈
  width: ${(props) => (props.size ? sizeSets[props.size].width : '100px')};
  height: ${(props) => (props.size ? sizeSets[props.size].height : 'auto')};
  font-size: ${(props) =>
    props.size ? sizeSets[props.size].fontSize : '1rem'};
  border-radius: ${(props) => (props.radius ? props.radius : 5)}px;
`;

export const Button = styled.button<ButtonProps>`
  ${ButtonStyles};
  ${commonStyle};
  ${(props) => props.variant && variants[props.variant].style};
`;

export const IconButton = styled.button<ButtonProps>`
  width: ${(props) => props.iconSize}px;
  height: ${(props) => props.iconSize}px;
  padding: 2%;
  border-radius: ${(props) => (props.radius ? props.radius : 5)}px;
  ${commonStyle};
  ${(props) => props.variant && variants[props.variant].style};
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

// 프로젝트 환경에 따라 달라질값
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
