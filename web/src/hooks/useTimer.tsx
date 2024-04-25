// =============================================================================
// File    :  useTimer.tsx
// Class   :
// Purpose :  useTimer
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================

import React, { useCallback, useEffect, useRef, useState } from 'react';

type TimerType = '+' | '-';

/**
 * timer 이벤트 hook
 * @property { string } propsName 설명
 * @returns time 시간값
 * @returns clearIntervalEvent
 */
const useTimer = (type: TimerType, time: number) => {
  let intervalId = useRef<NodeJS.Timeout>();

  const [timer, setTimer] = useState<number>(time);

  /** interval clear 이벤트  */
  const clearIntervalEvent = useCallback(() => {
    clearInterval(intervalId.current);
    setTimer(time);
  }, [time]);

  /** timer 이벤트 */
  const timerEvent = useCallback(() => {
    intervalId.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearIntervalEvent();
          return prevTime;
        }
        if (type === '+') {
          return prevTime + 1;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  }, [clearIntervalEvent, type]);

  /** 초를 '분:초' 형식으로 변환하는 함수 */
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return {
    time: formatTime(timer),
    timerEvent,
    clearIntervalEvent,
  };
};

export default useTimer;
