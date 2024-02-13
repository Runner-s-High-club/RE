import styled from 'styled-components';
import { InputInterface } from '@/components/common/input/interface/input.interface';

export const Input = styled.input<InputInterface>`
  background: ${({ theme }) => theme.colors?.bg_gray000};
  border-color: ${({ theme }) => theme.colors?.primary};
  width: calc(100%);
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  &::placeholder {
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.bg_gray000};
  }
  &:focus {
    outline: none;
  }
`;
