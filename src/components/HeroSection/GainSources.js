"use client";

import { useState } from "react";
import { AText, Box, Button } from "../uikit";
import clsx from "clsx";
import styles from "./index.module.css";

export const GainSources = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = (isActive) => {
    setIsActive(isActive);
  };

  return (
    <Box className={styles.gain_sources} direction="column">
      <Box className={styles.toggle_btns} justify="between">
        <Button
          className={clsx([styles.btn_toggle, isActive && styles.active])}
          onClick={() => handleToggle(true)}
        >
          Операторам
        </Button>
        <Button
          className={clsx([styles.btn_toggle, !isActive && styles.active])}
          onClick={() => handleToggle(false)}
        >
          ОТТ сервисам
        </Button>
      </Box>
      <AText className={clsx([styles.toggle_info, isActive && styles.active])}>
        Найдите идеальный баланс выручки и удовлетворённости пользователей с
        платформой рекламной монетизации
      </AText>
      <AText className={clsx([styles.toggle_info, !isActive && styles.active])}>
        Дополнительные возможности обогащения данных об аудитории и монетизации
      </AText>
    </Box>
  );
};
