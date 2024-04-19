// =============================================================================
// File    :  ErrorLabel.tsx
// Class   :
// Purpose :  ErrorLabel
// Date    :  2024.04
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import React from 'react';
import * as Styles from '@/components/common/label/styles/errorLabel.style';

interface IErrorLabel {
  label: string;
}

/**
 *
 * @param
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const ErrorLabel = ({ label }: IErrorLabel) => {
  return <Styles.Label>{label}</Styles.Label>;
};

export default ErrorLabel;
