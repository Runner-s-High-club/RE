// =============================================================================
// File    : errorLabel.style.ts
// Class   :
// Purpose : errorLabel.style.ts 스타일
// Date    : 2024.04
// Author  : JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import styled from 'styled-components';

export const Label = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger};
`;
