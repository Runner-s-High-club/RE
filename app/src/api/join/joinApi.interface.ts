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
  memberAgree: string;
}
