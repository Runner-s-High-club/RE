import { IJoinCheckState } from '@/app/join/page';
import Checkbox from '@/components/common/checkbox/Checkbox';
import { styled } from 'styled-components';

interface IJoinAgree {
  isCheckState: IJoinCheckState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 회원가입 약관 동의 체크박스 컴포넌트
 * @returns
 */
const JoinAgree = ({ isCheckState, onChange }: IJoinAgree) => {
  return (
    <AllCheckBox>
      <AllCheck>
        <Checkbox
          id='allCheck'
          checked={isCheckState.allCheck}
          label='전체동의'
          onChange={onChange}
        />
      </AllCheck>
      <AllInfoTextBox>
        <Checkbox
          id='serviceCheck'
          checked={isCheckState.serviceCheck}
          label='서비스 이용약관 (필수)'
          onChange={onChange}
        />
        <Checkbox
          id='useInfoCheck'
          checked={isCheckState.useInfoCheck}
          label='개인정보 수집 및 이용동의 (필수)'
          onChange={onChange}
        />
        <Checkbox
          id='locationCheck'
          checked={isCheckState.locationCheck}
          label='위치기반서비스 이용약관 (선택)'
          onChange={onChange}
        />
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
  height: 150px;
`;

const AllInfoTextBox = styled.div`
  margin-top: 5px;
  padding-left: 10px;
  p {
    color: #858585;
    word-wrap: break-word;
  }
`;
