// =============================================================================
// File    : joinApi.interface.ts
// Class   :
// Purpose : joinApi.interface.ts
// Date    : 2024.03
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

/** 회원 가입 api 매개변수 인터페이스  */
export interface IJoinParam {
  memberEmail: string;
  memberNm: string;
  memberPwd: string;
  birth: string;
  memberPhone: string;
  agreeDTO: {
    firstSelAgree: string;
    secondSelAgree: string;
    thirdSelAgree: string;
  };
}

/** 아이디 체크 반환 값 인터페이스  */
export interface IIdCheckReturn {
  code: string;
  message: string;
  data: any;
}
