'use client';
import Button from '@/components/common/button/Button';
import Checkbox from '@/components/common/checkbox/Checkbox';
import Input from '@/components/common/input/Input';
import InputLabel from '@/components/common/input/InputLabel';
import JoinAgree from '@/components/feature/join/agree/JoinAgree';
import { useState } from 'react';
import styled from 'styled-components';

/** 회원가입 페이지 */
const JoinPage = () => {
  const [useNm, setUseNm] = useState('');

  const onChangeNm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseNm(e.target.value);
  };
  return (
    <AgreeSection>
      <AgreeTitle>회원가입</AgreeTitle>
      <ContentBox>
        <InputContent>
          <InputLabel
            label='아이디*'
            text={useNm}
            id='useId'
            onChange={onChangeNm}
          />
          <Space30 />
          <InputLabel
            label='비밀번호*'
            text={useNm}
            id='password'
            onChange={onChangeNm}
          />
          <Space30 />
          <InputLabel
            label='비밀번호 재입력'
            text={useNm}
            id='passwordCheck'
            onChange={onChangeNm}
          />
          <Space30 />
          <PhoneAuthContent>
            <InputLabel
              label='휴대폰 번호*'
              text={useNm}
              id='passwordCheck'
              onChange={onChangeNm}
            />
            <SpaceR20 />
            <ButtonBox>
              <Button>중복 확인</Button>
            </ButtonBox>
          </PhoneAuthContent>
          <Space30 />
          <InputLabel
            label='이름*'
            text={useNm}
            id='useId'
            onChange={onChangeNm}
          />
          <Space30 />
          <InputLabel
            label='생년월일'
            text={useNm}
            id='password'
            onChange={onChangeNm}
          />
          <Space30 />
          <InputLabel
            label='닉네임'
            text={useNm}
            id='password'
            onChange={onChangeNm}
          />
        </InputContent>
        <Space80 />
        {/* 약관동의 컴포넌트 체크박스 */}
        <JoinAgree />
        <BottomButtonContent>
          <Button>가입하기</Button>
        </BottomButtonContent>
      </ContentBox>
      {/* <Space20 /> */}
    </AgreeSection>
  );
};
export default JoinPage;

const AgreeSection = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const AgreeTitle = styled.h2`
  margin-top: 140px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Space15 = styled.div`
  margin-bottom: 15px;
`;

const Space20 = styled.div`
  margin-bottom: 20px;
`;

const Space30 = styled.div`
  margin-bottom: 30px;
`;

const Space80 = styled.div`
  margin-top: 60px;
`;

const SpaceR20 = styled.div`
  margin-right: 20px;
`;

const ContentBox = styled.div`
  width: 60%;
  height: 100%;
  min-width: 300px;
  max-width: 760px;
`;

const BottomButtonContent = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 760px;
  margin-top: 30%;
  margin-bottom: 4%;
  position: relative;
  bottom: 10px;
`;

const InputContent = styled.div`
  margin-top: 10%;
  height: auto;
  /* border: 1px solid red; */
`;

const PhoneAuthContent = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  width: 30%;
`;
