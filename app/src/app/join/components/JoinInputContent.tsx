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
import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { IJoinInputState } from '../page';
import Button from '@/components/common/button/Button';
import useTimer from '@/hooks/useTimer';
import SelectBox from '@/components/common/selectBox/SelectBox';

interface IJoinInputContent {
  inputState: IJoinInputState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requestSmsCodeCallback: () => void;
  postSmsCodeCallback: () => void;
}

/**
 * 회원 가입 회원정보 input 컴포넌트
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const JoinInputContent = ({
  inputState,
  onChange,
  requestSmsCodeCallback,
  postSmsCodeCallback,
}: IJoinInputContent) => {
  // let intervalId = useRef<NodeJS.Timeout>();

  /** 핸드폰 인증 번호 버튼 유효성 검사 */
  const isSmsInputDisabled = inputState.phoneNum.length > 9;
  /** 인증 번호 클릭 유무 */
  const [isClickedSmsBtn, setIsClickedSmsBtn] = useState<boolean>(false);

  const timerController = useTimer('-', 180);

  /** 인증 번호 요청 함수 */
  const requestSmsCode = () => {
    requestSmsCodeCallback();
    setIsClickedSmsBtn((prev) => !prev);
  };

  /** 인증 번호 확인 함수 */
  const postSmsCode = () => {
    postSmsCodeCallback();
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
          />
        </SelectContent>
      </IdBox>
      <Space bottom={30} />
      <InputLabel
        label='비밀번호*'
        text={inputState.password}
        id='password'
        onChange={onChange}
      />
      <Space bottom={30} />
      <InputLabel
        label='비밀번호 재입력'
        text={inputState.passwordCheck}
        id='passwordCheck'
        onChange={onChange}
      />
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
          <Button disabled={!isSmsInputDisabled} onClick={requestSmsCode}>
            인증 번호 요청
          </Button>
        </ButtonBox>
      </PhoneAuthContent>
      <Space bottom={30} />
      {isClickedSmsBtn && (
        <PhoneAuthContent>
          <SmsInputBox>
            <InputLabel
              label='인증 번호 입력'
              text={''}
              id='phoneNum'
              onChange={onChange}
            />
          </SmsInputBox>
          <Space right={20} />
          <TimerSpan>{timerController.time}</TimerSpan>
          <Space right={20} />
          <ButtonBox>
            <Button onClick={postSmsCode}>인증 번호 확인</Button>
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
