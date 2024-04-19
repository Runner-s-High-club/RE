'use client';
import Button from '@/components/common/button/Button';
import Space from '@/components/common/space/Space';
import JoinAgree from '@/components/feature/join/JoinAgree';
import { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import JoinInputContent from '@/components/feature/join/JoinInputContent';
import usePasswordCheck from '@/hooks/usePasswordCheck';
import authApi from '@/api/auth/authApi';
import joinApi from '@/api/join/joinApi';
import services from '@/common/constants/services';
import { useRouter } from 'next/navigation';

export interface IJoinInputState {
  useId: string;
  password: string;
  passwordCheck: string;
  phoneNum: string;
  useNm: string;
  nickName: string;
  birthDay: string;
  smsCode: string;
}

export interface IJoinCheckState {
  allCheck: boolean;
  serviceCheck: boolean;
  useInfoCheck: boolean;
  locationCheck: boolean;
}

/** 회원가입 페이지 */
const JoinPage = (): JSX.Element => {
  const router = useRouter();
  /** 인증 api */
  const authApiController = authApi();
  /** 회원가입 관련 api */
  const joinApiController = joinApi();
  /** 회원가입 회원정보 input 상태 */
  const [joinInputState, setJoinInputState] = useState<IJoinInputState>({
    useId: '',
    password: '',
    passwordCheck: '',
    phoneNum: '',
    useNm: '',
    nickName: '',
    birthDay: '',
    smsCode: '',
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

  /** 인증 번호 클릭 유무 */
  const [isClickedSmsBtn, setIsClickedSmsBtn] = useState<boolean>(false);

  /** 선택 이메일 상태 */
  const [email, setEmail] = useState('gmail.com');

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
      [id]: value.trim(),
    }));
  };

  /**
   * 이메일 셀렉터 콜백 함수
   */
  const emailSelectCallback = (pEmail: string) => {
    setEmail(pEmail);
  };

  /**
   * 아이디 체크 api
   */
  const idCheck = async () => {
    const useId = `${joinInputState.useId + '@' + email}`;
    const idCheck = await joinApiController.idCheck(useId);
    // 아이디 사용 가능 아이디
    if (idCheck.code === services.code.success) {
      joinDisabled.current.isUseId = false;
      // TODO: 앱뷰로 동작 될시 데이터를 보내줘는 로직으로 변경
      window.alert('사용 가능한 ID 입니다.');
    } else if (idCheck.code === services.code.join.existingId) {
      window.alert(idCheck.message);
    }
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

  /** 핸드폰 인증 번호 요청
   * @param { string } pPhoneNum 핸드폰 번호
   */
  const requestSmsCode = async (pPhoneNum: string) => {
    await authApiController.getSmsCode(pPhoneNum);
    setIsClickedSmsBtn(() => {
      return true;
    });
  };

  // TODO: 인증 번호 예외 처리 추가 해야함 1. 인증 횟수 2. 인증이 완료 되었다면 더이상 못 누르게
  /** 인증 번호 입력
   * @param { string } pSmsCode sms 인증 코드
   */
  const postSmsCodeCallback = async () => {
    const smsCheck = await authApiController.smsCodeCheck({
      authNumber: joinInputState.smsCode,
      phoneNumber: joinInputState.phoneNum,
    });
    /** 핸드폰 인증 유효성 검사  */
    if (smsCheck) {
      window.alert('인증이 완료 되었습니다.');
      joinDisabled.current.isPhone = false;
      setIsClickedSmsBtn(() => {
        return false;
      });
    } else {
      window.alert('인증 번호를 다시 확인해주세요.');
    }
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
  const completeJoin = async () => {
    const useId = `${joinInputState.useId + '@' + email}`;
    const joinRes = await joinApiController.join({
      memberEmail: useId,
      memberNm: joinInputState.useNm,
      memberPwd: joinInputState.password,
      birth: joinInputState.birthDay,
      memberPhone: joinInputState.phoneNum.replace(/-/g, ''),
      agreeDTO: {
        firstSelAgree: '1',
        secondSelAgree: '1',
        thirdSelAgree: '1',
      },
    });
    if (joinRes?.id) {
      router.replace('/join/complete');
    } else {
      window.alert('회원 가입에 실패 하였습니다. 기입 정보를 확인해주세요.');
    }
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
          emailSelectCallback={emailSelectCallback}
          idCheckCallback={idCheck}
          isClickedSmsBtn={isClickedSmsBtn}
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
