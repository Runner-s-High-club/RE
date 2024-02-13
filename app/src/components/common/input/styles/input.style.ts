import styled from 'styled-components';
import { InputInterface } from '@/components/common/input/interface/input.interface';

export const Input = styled.input<InputInterface>`
  background: ${({ theme }) => theme.colors?.default};
  border-color: ${({ theme }) => theme.colors?.primary};
  width: calc(100% - 20px);
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  &::placeholder {
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.default};
  }
  &:focus {
    outline: none;
  }
`;
