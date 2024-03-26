'use client';
import Button from '@/components/common/button/Button';
import Space from '@/components/common/space/space';
import JoinAgree from '@/components/feature/join/agree/JoinAgree';
import { useState } from 'react';
import JoinInputContent from './components/JoinInputContent';
import {
  IJoinInputState,
  AgreeSection,
  ContentBox,
  AgreeTitle,
  BottomButtonContent,
} from './page';

/** 회원가입 페이지 */
export const JoinPage = (): JSX.Element => {
  /** 회원가입 input state */
  const [joinInputState, setJoinInputState] = useState<IJoinInputState>({
    useId: '',
    password: '',
    passwordCheck: '',
    phoneNum: '',
    useNm: '',
    nickName: '',
    birthDay: '',
  });

  /** 회원가입 input onChang */
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setJoinInputState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <AgreeSection>
      <ContentBox>
        <AgreeTitle>회원가입</AgreeTitle>
        회원정보 input 컴포넌트
        <JoinInputContent
          inputState={joinInputState}
          onChange={onChangeInput}
        />
        <Space top={40} />
        {/* 약관동의 컴포넌트 체크박스 */}
        <JoinAgree />
        <Space bottom={20} />
        <BottomButtonContent>
          <Button>가입하기</Button>
        </BottomButtonContent>
      </ContentBox>
      <Space bottom={20} />
    </AgreeSection>
  );
};
