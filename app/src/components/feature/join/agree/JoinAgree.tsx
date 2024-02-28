import Checkbox from '@/components/common/checkbox/Checkbox';
import { styled } from 'styled-components';

/**
 * 회원가입 약관 동의 체크박스 컴포넌트
 * @returns
 */
const JoinAgree = () => {
  return (
    <AllCheckBox>
      <AllCheck>
        <Checkbox id='allCheck' label='전체동의' />
      </AllCheck>
      <AllInfoTextBox>
        <Checkbox id='service' label='서비스 이용약관 (필수)' />
        <Checkbox id='useInfo' label='개인정보 수집 및 이용동의 (필수)' />
        <Checkbox id='state' label='위치기반서비스 이용약관 (선택)' />
      </AllInfoTextBox>
    </AllCheckBox>
  );
};

export default JoinAgree;

const AllCheck = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const AllCheckBox = styled.div`
  margin-top: 20px;
  height: 80px;
`;

const AgreeTextarea = styled.textarea`
  color: #858585;
  padding: 10px;
  /* margin-left: 6%; */
  margin-top: 10px;
  height: calc(100% - 36%);
  width: calc(100%);
  border-radius: 5px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.bg_gray300};
`;

const AllInfoTextBox = styled.div`
  margin-top: 5px;
  padding-left: 10px;
  p {
    color: #858585;
    word-wrap: break-word;
  }
`;
