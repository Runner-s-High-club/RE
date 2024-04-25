export default Object.freeze({
  api: {
    version: 'api/v1',
    host: 'http://3.38.21.254:80',
    contentType: 'application/json; charset=utf-8',
    method: {
      post: 'POST',
      get: 'GET',
    },
  },
  url: {
    enquiry: {
      /** 아이디 체크  */
      idCheck: 'enquiry/idCheck',
    },
    join: {
      /** 회원 가입 */
      join: 'join',
    },
    auth: {
      sms: 'auth/sms',
      smsCheck: 'auth/smsCheck',
    },
    login: {
      login: 'login',
      logout: 'logout',
      refresh: 'refresh',
    },
  },
  code: {
    success: '1', // 성공,
    notFound: '00002', // 올바르지 않은 접근
    auth: {
      refreshFail: '1004', // 존재하지 않는 refreshToken값 입니다.
      phoneNumberFail: '1005', // 휴대폰 번호를 입력해주세요.
      authNumberFail: '1006', // 올바른 인증번호를 입력해주세요.
    },
    login: {
      loginFail: '1001', // '로그인 실패 입니다. ID나 비밀번호를 확인해주세요.'
    },
    join: {
      existingId: '1002', // 이미 존재하는 ID 입니다.
      nullFail: '1003', // 모든 항목을 반드시 입력해주세요.
    },
  },
  token: {
    Authorization: 'Authorization',
    Bearer: 'bearer=',
  },
});
