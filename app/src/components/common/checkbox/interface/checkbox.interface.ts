import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

/** 체크박스 인터페이스  */
export interface ICheckBoxProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type'
  > {
  /**
   * 선택 여부
   */
  checked?: boolean;
  /**
   * 연결된 라벨 요소의 텍스트
   */
  label: string;
  /**
   * 고유 식별자
   */
  id: string | undefined;
}
