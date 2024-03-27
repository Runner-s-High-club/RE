export default Object.freeze({
  api: {
    host: '3.38.21.254:80',
    contentType: 'application/json; charset=utf-8',
    method: {
      post: 'POST',
      get: 'GET',
    },
  },
  url: {
    join: {
      /** 아이디 체크  */
      idCheck: 'idCheck',
      /** 회원 가입 */
      join: 'join',
    },
    auth: {
      sms: 'auth/sms',
      smsCheck: 'smsCheck',
    },
    login: {
      login: 'login',
      logout: 'logout',
      refresh: 'refresh',
    },
  },
  code: {
    success: '00000', // 성공,
    fail: '00001', // 실패
    notFound: '00002', // 올바르지 않은 접근
  },
  token: {
    Authorization: 'Authorization',
    Bearer: 'bearer=',
  },
});
