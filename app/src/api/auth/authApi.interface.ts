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
