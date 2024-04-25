'use client';

import { styled } from 'styled-components';

export default function Home() {
  return (
    <AgreeSection>
      <ContentBox>
        <AgreeTitle>메인화면</AgreeTitle>
      </ContentBox>
    </AgreeSection>
  );
}

const AgreeSection = styled.section`
  width: 100%;
  height: auto;
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
`;

const AgreeTitle = styled.h2`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  user-select: none;
  margin-top: 40%;
`;
