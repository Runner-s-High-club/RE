import React from 'react';
import * as CheckboxStyles from '@/components/common/checkbox/styles/checkbox.style';
import { ICheckBoxProps } from '@/components/common/checkbox/interface/checkbox.interface';

/**
 * 체크박스 컴포넌트
 * @param param0
 * @returns
 */
const Checkbox = ({ id, label, ...rest }: ICheckBoxProps) => {
  return (
    <CheckboxStyles.CheckBoxWrap>
      <input id={id} type='checkbox' {...rest}></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxStyles.CheckBoxWrap>
  );
};

export default Checkbox;
