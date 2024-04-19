'use client';
// =============================================================================
// File    :  page.tsx
// Class   :
// Purpose :  page
// Date    :  2024.04
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import React from 'react';
import { styled } from 'styled-components';
import Img from '@/assets/img/cracker.png';
import Image from 'next/image';
import Button from '@/components/common/button/Button';
import { useRouter } from 'next/navigation';

/**
 * 회원가입 완료 페이지
 * @returns React.JSX.Element
 */
const CompletePage = () => {
  const router = useRouter();

  /** 로그인 페이지 이동 이벤트 */
  const onPushLoginPage = () => {
    router.replace('/login');
  };

  return (
    <CompleteSection>
      <ContentBox>
        <CreateImg src={Img} alt='회원가입 축하 이미지' />
        <p className='text_1'>회원가입 완료</p>
        <p className='text_2'>회원가입이 완료되었습니다!</p>
        <p className='text_3'>
          Runner’s High Club 과 달리는 즐거움을 함께 하세요.
        </p>
        <BottomButtonContent>
          <Button onClick={onPushLoginPage}>로그인하러 가기</Button>
        </BottomButtonContent>
      </ContentBox>
    </CompleteSection>
  );
};

export default CompletePage;

const CompleteSection = styled.section`
  width: 100%;
  /* height: auto; */
  height: 78vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
`;

const ContentBox = styled.div`
  width: 60%;
  height: 100%;
  min-width: 300px;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.text_333};
  }

  .text_1 {
    margin-top: 58px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.text_17};
    /* color: ${({ theme }) => theme.colors.text_333}; */
  }

  .text_2 {
    margin-top: 17px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.text_13};
  }

  .text_3 {
    margin-top: 17px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fonts.text_13};
  }
`;

const CreateImg = styled(Image)`
  width: 150px;
  height: 150px;
`;

const BottomButtonContent = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 760px;
  margin-top: auto;
  position: relative;
`;
