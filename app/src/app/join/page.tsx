'use client';
import Button from '@/components/common/button/Button';
import Space from '@/components/common/space/Space';
import JoinAgree from '@/components/feature/join/agree/JoinAgree';
import { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import JoinInputContent from './components/JoinInputContent';
import usePasswordCheck from '@/hooks/usePasswordCheck';

export interface IJoinInputState {
  useId: string;
  password: string;
  passwordCheck: string;
  phoneNum: string;
  useNm: string;
  nickName: string;
  birthDay: string;
}

export interface IJoinCheckState {
  allCheck: boolean;
  serviceCheck: boolean;
  useInfoCheck: boolean;
  locationCheck: boolean;
}

/** 회원가입 페이지 */
const JoinPage = (): JSX.Element => {
  /** 회원가입 회원정보 input 상태 */
  const [joinInputState, setJoinInputState] = useState<IJoinInputState>({
    useId: '',
    password: '',
    passwordCheck: '',
    phoneNum: '',
    useNm: '',
    nickName: '',
    birthDay: '',
  });

  /** 회원가입 약관동의 체크박스 상태  */
  const [isCheckedState, setIsCheckedState] = useState<IJoinCheckState>({
    allCheck: false,
    serviceCheck: false,
    useInfoCheck: false,
    locationCheck: false,
  });

  /** 회원가입 유효성 검사 상태  */
  const joinDisabled = useRef({
    isUseId: true,
    isPassword: true,
    isPasswordCheck: true,
    isPhone: true,
    isUserNm: true,
  });

  /** 패스워드 유효성 검사 hook  */
  const isPasswordValidCheck = usePasswordCheck;
  /** 회원가입 input onChang event */
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'useId':
        joinDisabled.current.isUseId = false;
        break;
      case 'useNm':
        joinDisabled.current.isUserNm = false;
        break;
      case 'password':
        if (isPasswordValidCheck(value)) {
          joinDisabled.current.isPassword = false;
        }
        break;
      case 'passwordCheck':
        if (joinInputState.password === value) {
          joinDisabled.current.isPasswordCheck = false;
        }
        break;
      default:
        break;
    }
    setJoinInputState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  /** 회원가입 약관 동의 onChange event */
  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === 'allCheck') {
      setIsCheckedState((prev) => {
        return {
          allCheck: checked,
          serviceCheck: checked,
          useInfoCheck: checked,
          locationCheck: checked,
        };
      });
    } else {
      setIsCheckedState((prev) => ({
        ...prev,
        [id]: checked,
      }));
    }
  };

  /** 핸드폰 인증 번호 요청 */
  const requestSmsCode = () => {
    console.log(`requestSmsCode 실행됨 :`);
  };

  /** 인증 번호 입력 */
  const postSmsCodeCallback = () => {
    console.log(`postSmsCodeCallback 실행됨 :`);
    joinDisabled.current.isPhone = false;
  };

  /** 회원가입 유효성 검사  */
  const isJoinValid = Object.entries(joinDisabled.current).some(
    ([key, value]) => value === true
  );

  /** 회원가입 유효성 검사 */
  const isJoinDisabled: boolean = useMemo(() => {
    return (
      isJoinValid ||
      !isCheckedState.serviceCheck ||
      !isCheckedState.useInfoCheck
    );
  }, [isCheckedState.serviceCheck, isCheckedState.useInfoCheck, isJoinValid]);

  /** 회원가입 event */

  const completeJoin = () => {
    console.log(`회원가입 완료  :`);
  };

  return (
    <AgreeSection>
      <ContentBox>
        <AgreeTitle>회원가입</AgreeTitle>
        {/* 회원정보 input 컴포넌트 */}
        <JoinInputContent
          inputState={joinInputState}
          onChange={onChangeInput}
          requestSmsCodeCallback={requestSmsCode}
          postSmsCodeCallback={postSmsCodeCallback}
        />
        <Space top={40} />
        {/* 약관동의 컴포넌트 체크박스 */}
        <JoinAgree isCheckState={isCheckedState} onChange={onChangeCheckbox} />
        <Space bottom={20} />
        <BottomButtonContent>
          <Button disabled={isJoinDisabled} onClick={completeJoin}>
            가입하기
          </Button>
        </BottomButtonContent>
      </ContentBox>
      <Space bottom={20} />
    </AgreeSection>
  );
};
export default JoinPage;

const AgreeSection = styled.section`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const AgreeTitle = styled.h2`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  user-select: none;
`;

const ContentBox = styled.div`
  width: 60%;
  height: 100%;
  min-width: 300px;
  max-width: 760px;
  display: flex;
  flex-direction: column;
`;

const BottomButtonContent = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 760px;
  margin-top: 20px;
  position: relative;
`;
