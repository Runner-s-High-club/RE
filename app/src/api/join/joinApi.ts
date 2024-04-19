// =============================================================================
// File    : joinApi.ts
// Class   :
// Purpose : joinApi.ts
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import services from '@/common/constants/services';
import { httpHandler } from '@/common/utils/httpHandler';
import { IIdCheckReturn, IJoinParam } from '@/api/join/joinApi.interface';

interface IJoinReturn {
  code: string;
  message: string;
  data: {
    id: number;
    email: string;
    memberPwd: string;
    role: string;
    memberPhone: string;
  };
}

/**
 * 회원가입 관련 api
 */
const joinApi = () => {
  /**
   *  회원 아이디 중복 체크 api
   * @param pMemberId sting
   * @returns {Promise} - 회원 아디지 중복 체크 결과를 나타내는 프로미스 리턴값
   */
  const idCheck = async (pMemberId: string): Promise<IIdCheckReturn> => {
    const idCheckRes = await httpHandler.post<IIdCheckReturn>(
      services.url.enquiry.idCheck,
      {
        email: pMemberId,
      }
    );
    return idCheckRes as IIdCheckReturn;
  };

  /**
   *  회원 가입 api
   * @param {Object} params - 회원 가입에 필요한 매개변수 객체
   * @param {string} params.memberEmail - 회원 이메일
   * @param {string} params.memberNm - 회원 이름
   * @param {string} params.memberPwd - 회원 비밀번호
   * @param {string} params.birth - 회원 생년월일
   * @param {string} params.memberPhone - 회원 전화번호
   * @param {string} params.agreeDTO - 회원 약관 동의 여부
   * @returns  {Promise} - 회원 가입 결과를 나타내는 프로미스
   */
  const join = async ({
    memberEmail,
    memberNm,
    memberPwd,
    birth,
    memberPhone,
    agreeDTO,
  }: IJoinParam) => {
    const joinRes = await httpHandler.post<IJoinReturn>(
      services.url.join.join,
      {
        memberEmail,
        memberNm,
        memberPwd,
        birth,
        memberPhone,
        agreeDTO,
      }
    );

    if (joinRes?.code === services.code.success) {
      return joinRes.data;
    }
  };

  return {
    idCheck,
    join,
  };
};

export default joinApi;
