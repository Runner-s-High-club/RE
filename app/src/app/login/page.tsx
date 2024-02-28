'use client';
import Button from '@/components/common/button/Button';
import Checkbox from '@/components/common/checkbox/Checkbox';
import Input from '@/components/common/input/Input';
import styled from 'styled-components';

/** 로그인 페이지 */
const LoginPage = () => {
  return (
    <LoginSection>
      <LogoTitle>Runners’ High Club</LogoTitle>
      <LoginBox>
        <Input placeholder='아이디' />
        <Space15 />
        <Input placeholder='비밀번호' />
        <Space20 />
        <Button>로그인</Button>
        <Space15 />
        <Checkbox id='checkId' label='아이디 저장' />
      </LoginBox>
      <LoginInfoBox>
        <li>아이디</li>
        <Line />
        <li>비밀번호 찾기</li>
        <Line />
        <li>회원가입</li>
      </LoginInfoBox>
      <BottomBox>
        <CopyrightText>
          <SubLogo>Runners’ High Club </SubLogo>
          copyright
          <strong> @ JHS & SY Corp.</strong> All Rights Reserved.
        </CopyrightText>
      </BottomBox>
    </LoginSection>
  );
};
export default LoginPage;

const LoginSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const LogoTitle = styled.h2`
  margin-top: 140px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const LoginBox = styled.div`
  min-width: 300px;
  max-width: 760px;
  width: 60%;
  height: auto;
  margin-top: 45px;
`;

const Space15 = styled.div`
  margin-bottom: 15px;
`;

const Space20 = styled.div`
  margin-bottom: 20px;
`;

const LoginInfoBox = styled.ul`
  width: 100%;
  min-width: 300px;
  max-width: 760px;
  width: 60%;
  height: 30px;
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  li {
    position: relative;
    color: ${({ theme }) => theme.colors.text_333};
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.bg_gray300};
`;

const BottomBox = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  max-width: 760px;
  width: 60%;
  height: 45px;
  position: relative;
  bottom: 4%;
  margin-top: auto;
  align-items: center;
  justify-content: center;
`;

const SubLogo = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`;

const CopyrightText = styled.p`
  font-size: 12px;
`;
