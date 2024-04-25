import React, { forwardRef } from 'react';
import { InputInterface } from '@/components/common/input/interface/input.interface';
import * as InputStyles from '@/components/common/input/styles/input.style';

/** 기본 input 컴포넌트 */
const Input = forwardRef<any, InputInterface>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <InputStyles.Input
        ref={ref}
        type={'text'}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
