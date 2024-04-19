// =============================================================================
// File    : loginApi.ts
// Class   :
// Purpose : loginApi.ts
// Date    : 2024.04
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import services from '@/common/constants/services';
import { httpHandler } from '@/common/utils/httpHandler';

interface ILoginReturn {
  code: string;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    id: number;
    memberEmail: string;
    name: string;
  };
}

const loginApi = () => {
  /**
   * sms 인증 번호 요청 api
   * @param {string} pPhoneNumber
   */
  const login = async (email: string, pwd: string) => {
    const loginRes = await httpHandler.post<ILoginReturn>(
      services.url.login.login,
      {
        memberEmail: email,
        memberPwd: pwd,
      }
    );

    if (loginRes?.code === '1') {
      return true;
    } else {
      return false;
    }
  };

  return {
    login,
  };
};

export default loginApi;
