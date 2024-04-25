// =============================================================================
// File    :  usePasswordCheck.tsx
// Class   :
// Purpose :  usePasswordCheck
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import React from 'react';

/**
 * 패스워드 유효성 검사 hook
 * @property { string } password value
 * @returns React.JSX.Element
 */
const usePasswordCheck = (pValue: string) => {
  const passwordPattern =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return passwordPattern.test(pValue);
};

export default usePasswordCheck;
