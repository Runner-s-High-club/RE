// =============================================================================
// File    : authApi.ts
// Class   :
// Purpose : authApi.ts
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import services from '@/common/constants/services';
import { httpHandler } from '@/common/utils/httpHandler';
import { ISmsCodeCheckParam } from '@/api/auth/authApi.interface';

/**
 * 인증 관려 api
 */
const authApi = () => {
  /**
   * sms 인증 번호 요청 api
   * @param {string} pPhoneNumber
   */
  const getSmsCode = async (pPhoneNumber: string) => {
    const smsCodeRes = await httpHandler.post(services.url.auth.sms, {
      phoneNumber: pPhoneNumber,
    });

    return smsCodeRes;
  };

  /**
   * sms 인증 번호 체크 api
   * @param {Object} params -  sms 인증 번호 체크 매개변수 객체
   * @param {string} params.authNumber 인증 번호
   * @param {string} params.phoneNumber 핸드폰 번호
   */
  const smsCodeCheck = async ({
    authNumber,
    phoneNumber,
  }: ISmsCodeCheckParam) => {
    const smsCodeCheckRes = await httpHandler.post(services.url.auth.smsCheck, {
      authNumber,
      phoneNumber,
    });

    if (smsCodeCheckRes) {
      return smsCodeCheckRes;
    }
  };

  return { getSmsCode, smsCodeCheck };
};

export default authApi;
