// =============================================================================
// File    :  JoinInputContent.tsx
// Class   :
// Purpose :  JoinInputContent
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import InputLabel from '@/components/common/input/InputLabel';
import Space from '@/components/common/space/Space';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { IJoinInputState } from '../../../app/join/page';
import Button from '@/components/common/button/Button';
import useTimer from '@/hooks/useTimer';
import SelectBox from '@/components/common/selectBox/SelectBox';
import ErrorLabel from '@/components/common/label/ErrorLabel';
import usePasswordCheck from '@/hooks/usePasswordCheck';

interface IJoinInputContent {
  inputState: IJoinInputState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requestSmsCodeCallback: (pPhoneNum: string) => void;
  postSmsCodeCallback: (pSmsCode: string) => void;
  idCheckCallback: () => void;
  emailSelectCallback: (pEmail: string) => void;
  isClickedSmsBtn: boolean;
}

/**
 * 회원 가입 회원정보 input 컴포넌트
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const JoinInputContent = ({
  inputState,
  onChange,
  idCheckCallback,
  requestSmsCodeCallback,
  postSmsCodeCallback,
  emailSelectCallback,
  isClickedSmsBtn,
}: IJoinInputContent) => {
  /** 핸드폰 인증 번호 버튼 유효성 검사 */
  const isSmsInputDisabled = useMemo(() => {
    return inputState.phoneNum.length > 9 && !isClickedSmsBtn;
  }, [inputState.phoneNum.length, isClickedSmsBtn]);

  const timerController = useTimer('-', 180);

  /** 인증 번호 요청 함수 */
  const requestSmsCode = (pPhoneNum: string) => {
    requestSmsCodeCallback(pPhoneNum);
  };

  /** 인증 번호 확인 함수 */
  const postSmsCode = (pSmsCode: string) => {
    postSmsCodeCallback(pSmsCode);
    timerController.clearIntervalEvent();
  };

  useEffect(() => {
    if (isClickedSmsBtn) {
      timerController.timerEvent();
    }
  }, [isClickedSmsBtn]);

  const emailSelectData = [
    {
      label: 'gmail.com',
      value: 'gmail.com',
    },
    {
      label: 'naver.com',
      value: 'naver.com',
    },
  ];

  /** 패스워드 유효성 검사 hook  */
  const isPasswordValidCheck = usePasswordCheck;

  /** 패스워드 에러 메시지 여부  */
  const isPwdError = useMemo(() => {
    if (inputState.password.length > 0) {
      if (isPasswordValidCheck(inputState.password)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }, [inputState.password, isPasswordValidCheck]);

  /** 비밀번호 재입력 에러 메세지 여부 */
  const isPwdCheckError = useMemo(() => {
    if (inputState.passwordCheck.length > 0) {
      if (inputState.passwordCheck === inputState.password) {
        return false;
      }
      return true;
    }
    return false;
  }, [inputState.password, inputState.passwordCheck]);

  /** sms 요청 버튼 텍스트  */
  const smsBtnText = useMemo(() => {
    return isClickedSmsBtn ? '인증번호 재 요청' : '인증 번호 요청';
  }, [isClickedSmsBtn]);

  return (
    <InputContent>
      <IdBox>
        <InputLabel
          label='아이디*'
          text={inputState.useId}
          id='useId'
          onChange={onChange}
        />
        <Space right={20} />
        <SelectContent>
          <SelectBox
            data={emailSelectData}
            defaultValue={emailSelectData[0].label}
            selectCallback={emailSelectCallback}
          />
        </SelectContent>
        <Space right={10} />
        <ButtonBox>
          <Button onClick={idCheckCallback}>중복확인</Button>
        </ButtonBox>
      </IdBox>
      <Space bottom={30} />
      <InputLabel
        label='비밀번호*'
        type='password'
        text={inputState.password}
        id='password'
        onChange={onChange}
      />
      <Space bottom={10} />
      <PwdDetailInfoText>
        비밀번호는 영문자, 숫자, 특수문자를 포함한 8~16자리로 구성하여아 합니다.
      </PwdDetailInfoText>
      <Space bottom={10} />
      {isPwdError && <ErrorLabel label='비밀번호 기준을 충족하지 않습니다.' />}
      <Space bottom={30} />
      <InputLabel
        type='password'
        label='비밀번호 재입력'
        text={inputState.passwordCheck}
        id='passwordCheck'
        onChange={onChange}
      />
      {isPwdCheckError && <ErrorLabel label='비밀번호가 일치하지 않습니다.' />}
      <Space bottom={30} />
      <PhoneAuthContent>
        <InputLabel
          label='휴대폰 번호*'
          text={inputState.phoneNum}
          id='phoneNum'
          onChange={onChange}
        />
        <Space right={20} />
        <ButtonBox>
          <Button onClick={() => requestSmsCode(inputState.phoneNum)}>
            {smsBtnText}
          </Button>
        </ButtonBox>
      </PhoneAuthContent>
      <Space bottom={30} />
      {isClickedSmsBtn && (
        <PhoneAuthContent>
          <SmsInputBox>
            <InputLabel
              label='인증 번호 입력'
              text={inputState.smsCode}
              id='smsCode'
              onChange={onChange}
            />
          </SmsInputBox>
          <Space right={20} />
          <TimerSpan>{timerController.time}</TimerSpan>
          <Space right={20} />
          <ButtonBox>
            <Button onClick={() => postSmsCode(inputState.smsCode)}>
              인증 번호 확인
            </Button>
          </ButtonBox>
        </PhoneAuthContent>
      )}
      <Space bottom={30} />
      <InputLabel
        label='이름*'
        text={inputState.useNm}
        id='useNm'
        onChange={onChange}
      />
      <Space bottom={30} />
      <InputLabel
        label='생년월일'
        text={inputState.birthDay}
        id='birthDay'
        onChange={onChange}
      />
      <Space bottom={40} />
      <InputLabel
        label='닉네임'
        text={inputState.nickName}
        id='nickName'
        onChange={onChange}
      />
    </InputContent>
  );
};

export default JoinInputContent;

const InputContent = styled.div`
  margin-top: 10%;
  height: auto;
`;

const PhoneAuthContent = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 30%;
  margin-left: auto;
  max-width: 100px;
`;

const TimerSpan = styled.span``;

const SmsInputBox = styled.div`
  width: 60%;
`;

const IdBox = styled.div`
  display: flex;
`;

const SelectContent = styled.div`
  width: 30%;
`;

const PwdDetailInfoText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_gray2};
`;
