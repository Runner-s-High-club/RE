// =============================================================================
// File    :  selectBox.tsx
// Class   :
// Purpose :  selectBox
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import React, { useState } from 'react';
import styled from 'styled-components';
import SelectIcon from '@/assets/icon/arrow-down.svg';
import Image from 'next/image';

interface ISelectData {
  label: string;
  value: string;
}

interface ISelectBox {
  data: ISelectData[];
  placeholder?: string;
  defaultValue: string;
  selectCallback: (pValue: string) => void;
}

/**
 * 셀렉트 컴포넌트
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const SelectBox = ({
  data,
  placeholder,
  defaultValue,
  selectCallback,
}: ISelectBox) => {
  const [isSelected, setIsSelected] = useState(false);

  const [selectValue, setSelectValue] = useState<string>(defaultValue);

  /** 셀렉트 옵션 리스트 호출  */
  const showSelectedOption = () => {
    setIsSelected((prev) => !prev);
  };

  /** 셀렉트 이벤트 핸들러  */
  const selectEventHandler = (pSelectItem: ISelectData) => {
    selectCallback(pSelectItem.value);
    setSelectValue(pSelectItem.label);
    setIsSelected((prev) => {
      return false;
    });
  };

  return (
    <>
      <SelectContent>
        <SelectValue>{selectValue ? selectValue : placeholder}</SelectValue>
        <SelectButton onClick={showSelectedOption}>
          <ArrowImg src={SelectIcon} alt='selectIcon' />
        </SelectButton>
      </SelectContent>
      {isSelected && (
        <SelectOptionList>
          {data.map((item) => {
            return (
              <SelectOptionItem
                key={item.value}
                onClick={() => {
                  selectEventHandler(item);
                }}
              >
                {item.label}
              </SelectOptionItem>
            );
          })}
        </SelectOptionList>
      )}
    </>
  );
};

export default SelectBox;

const SelectContent = styled.div`
  width: calc(100% - 2px);
  height: calc(50px);
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text_gray1};
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
`;

const SelectValue = styled.span`
  display: inline-block;
  user-select: none;
  color: ${({ theme }) => theme.colors.text_gray4};
`;

const SelectButton = styled.button`
  height: 100%;
  width: 24px;
  margin-left: auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowImg = styled(Image)`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

const SelectOptionList = styled.ul`
  width: auto;
  height: auto;
  border-top: none;
  border-left: 1px solid ${({ theme }) => theme.colors.text_gray1};
  border-right: 1px solid ${({ theme }) => theme.colors.text_gray1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_gray1};
  transition: all 0.2ms ease-in-out;
  position: absolute;
  z-index: 100;
`;

const SelectOptionItem = styled.li`
  position: relative;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_gray1};
  height: 30px;
  display: flex;
  min-width: 110px;
  align-items: center;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.text_gray4};
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
  &:last-child {
    border-bottom: none;
  }
`;
