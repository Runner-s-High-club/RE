import React, { useMemo } from 'react';
import * as ButtonStyles from '@/components/common/button/styles/button.style';
import { ButtonProps } from '@/components/common/button/interface/button.interface';

/**
 * 기본 버튼 컴포넌트
 */
const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      className,
      htmlType = 'button',
      children,
      variant = 'primaryStyle',
      size = 'L',
      radius = 5,
      ...rest
    },
    ref
  ) => {
    return (
      <ButtonStyles.Button
        ref={ref}
        type={htmlType}
        $variant={variant}
        $size={size}
        $radius={radius}
        {...rest}
      >
        {children}
      </ButtonStyles.Button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
