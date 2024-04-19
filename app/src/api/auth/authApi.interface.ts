// =============================================================================
// File    : authApi.interface.ts
// Class   :
// Purpose : authApi.interface.ts
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

/** sms 인증번호 체크 api 매개변수 인퍼테이스  */
export interface ISmsCodeCheckParam {
  authNumber: string;
  phoneNumber: string;
}

/** 핸드폰 인증 반환 값 인터페이스  */
export interface ISmsCodeCheck {
  code: string;
  message: string;
  data: null;
}
