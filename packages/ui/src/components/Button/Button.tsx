import React, { useMemo } from 'react';
import { ButtonStyle } from './styles/Button.style';
import { ButtonProps } from './interface/Button.interface';

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
      ...rest
    },
    ref
  ) => {
    const Contents = useMemo(() => {
      return (
        <ButtonStyle
          ref={ref}
          type={htmlType}
          variant={variant}
          size={size}
          {...rest}
        >
          {children}
        </ButtonStyle>
      );
    }, [ref, htmlType, variant, rest, size, children]);

    return Contents;
  }
);

export default Button;
