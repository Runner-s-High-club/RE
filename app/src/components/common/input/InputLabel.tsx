import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled from 'styled-components';

interface InputLabelNonBorderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  id: string;
  label?: string;
  icon?: string;
  iconCallback?: () => void;
}

/** 라벨 애니메이션 인풋 */
const InputLabel = forwardRef(function InputLabelNonBorder(
  props: InputLabelNonBorderProps,
  forwardRef: Ref<HTMLInputElement>
) {
  const { text, id, label, iconCallback, icon, alt, ...rest } = props;
  return (
    <Wrap>
      <P>
        <input
          ref={forwardRef}
          id={id}
          {...rest}
          value={text}
          autoComplete=''
          required
        />
        {label && <label htmlFor={id}>{label}</label>}
      </P>
      {icon && text && (
        <IconBox onClick={iconCallback}>
          <Icon src={icon} alt={id} />
        </IconBox>
      )}
    </Wrap>
  );
});

export default InputLabel;

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
`;

const P = styled.p`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0;

  & input {
    box-sizing: border-box;
    padding-left: 5px;
    width: 100%;
    height: 100%;
    border: 0 none;
    color: #595f63;
    outline: none;
    position: absolute;
    left: 0;
    bottom: 0px;
    transition: all 0.3s ease;
    border-bottom: 1px solid #333;
  }

  & label {
    position: absolute;
    left: 5px;
    color: #9d9d9d;
    bottom: -17px;
    width: 100%;
    height: 100%;
    text-align: left;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  & input:focus + label,
  & input:valid + label {
    transform: translateY(-50%);
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    left: 0px;
  }

  & input:focus,
  & input:valid {
    width: 100%;
    transform: translateX(0);
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    transition: all 0.1s ease-in-out;
  }
`;

const IconBox = styled.div`
  position: relative;
  z-index: 100;
  margin-left: auto;
  width: 18px;
  height: 18px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  top: -77%;
  margin-right: 10px;
  background-color: colors.$gray300;
  border: none;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
