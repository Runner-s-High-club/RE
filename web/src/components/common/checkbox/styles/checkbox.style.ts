import styled from 'styled-components';

export const CheckBoxWrap = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    width: 14px;
    height: 14px;
  }
  label {
    display: inline-block;
    margin-left: 5px;
    color: #333;
    cursor: pointer;
  }
`;
