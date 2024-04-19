'use client';
import loginApi from '@/api/login/loginApi';
import Button from '@/components/common/button/Button';
import Checkbox from '@/components/common/checkbox/Checkbox';
import Input from '@/components/common/input/Input';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useMemo, useState } from 'react';
import styled from 'styled-components';

/** 로그인 페이지 */
const LoginPage = () => {
  const router = useRouter();
  const loginController = loginApi();
  const [loginInputState, setLoginInputState] = useState({
    id: '',
    pwd: '',
  });

  /** 라우터 핸들러 */
  const routerHandler = (path: string) => {
    router.push(path);
  };

  /** 로그인 인풋 onChange event */
  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setLoginInputState((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const loginHandler = async () => {
    const loginRes = await loginController.login(
      loginInputState.id,
      loginInputState.pwd
    );

    if (loginRes) {
      router.replace('/');
    } else {
      window.alert('입력정보를 확인해주세요.');
    }
  };

  /** 로그인 버튼 유효성 검사  */
  const loginBtnDisabled = useMemo(() => {
    return loginInputState.id.length > 1 && loginInputState.pwd.length > 1;
  }, [loginInputState.id.length, loginInputState.pwd.length]);

  return (
    <LoginSection>
      <LogoTitle>Runners’ High Club</LogoTitle>
      <LoginBox>
        <Input
          id='id'
          value={loginInputState.id}
          placeholder='아이디'
          onChange={onChangeLoginInput}
        />
        <Space15 />
        <Input
          id='pwd'
          value={loginInputState.pwd}
          placeholder='비밀번호'
          type='password'
          onChange={onChangeLoginInput}
        />
        <Space20 />
        <Button disabled={!loginBtnDisabled} onClick={loginHandler}>
          로그인
        </Button>
        <Space15 />
        <Checkbox id='checkId' label='아이디 저장' />
      </LoginBox>
      <LoginInfoBox>
        <li onClick={() => routerHandler('/login')}>아이디 찾기</li>
        <Line />
        <li onClick={() => routerHandler('/login')}>비밀번호 찾기</li>
        <Line />
        <li onClick={() => routerHandler('/join')}>회원가입</li>
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
