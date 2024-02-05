import React, { useMemo } from 'react';
import { IconButton, Button } from './styles/Button.style';
import { ButtonProps } from './interface/Button.interface';

const ButtonComponent = React.forwardRef<any, ButtonProps>(
  (
    {
      className,
      htmlType = 'button',
      children,
      variant = 'primaryStyle',
      size = 'L',
      iconSize,
      ...rest
    },
    ref
  ) => {
    const Contents = useMemo(() => {
      if (iconSize) {
        return (
          <IconButton
            ref={ref}
            type={htmlType}
            variant={variant}
            iconSize={iconSize}
            {...rest}
          >
            {children}
          </IconButton>
        );
      } else {
        return (
          <Button
            ref={ref}
            type={htmlType}
            variant={variant}
            size={size}
            {...rest}
          >
            {children}
          </Button>
        );
      }
    }, [iconSize, ref, htmlType, variant, rest, size, children]);

    return Contents;
  }
);

export default ButtonComponent;
