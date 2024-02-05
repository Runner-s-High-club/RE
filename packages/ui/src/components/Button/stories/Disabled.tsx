import ButtonComponent from '../ButtonComponent';
import { ButtonProps } from '../interface/Button.interface';
import * as style from '../styles/Button.style';

// 버튼 비활성화 스토리
const Disabled = (args: ButtonProps) => (
  <style.Wrapper>
    <ButtonComponent {...args} variant='defaultStyle' disabled>
      버튼 비활성화
    </ButtonComponent>
  </style.Wrapper>
);
export default Disabled;
