import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
} from 'react';

export type buttonSize = 'S' | 'M' | 'L';
export type Variant = 'primaryStyle' | 'defaultStyle' | 'ghostStyle';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      // ButtonHTMLAttributes<HTMLButtonElement>
      HTMLButtonElement
    >,
    'type'
  > {
  /**
   * 정의된 버튼 사이즈
   */
  size?: buttonSize;
  /**
   *  버튼 안에 들어올 컨텐츠
   */
  children?: React.ReactNode | string;
  /**
   * 고유한 의미론적 목적을 제공하는 여러 가지 버튼 모양
   */
  variant?: Variant;
  /**
   *  버튼 html type
   */
  htmlType?: 'button' | 'reset' | 'submit';
  /**
   * ref
   */
  ref?: ForwardedRef<HTMLButtonElement>;
  /**
   *  버튼 테두리 Radius
   */
  radius?: number;
  /**
   *  아이콘 사이즈 (아이콘 사이즈 입력시 정사이즈 비율로 바뀝니다.)
   */
  iconSize?: number;
  /**
   * 클릭 이벤트
   */
  onClick?: () => void;
}
