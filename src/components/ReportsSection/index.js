import { MainBtn } from "../MainBtn";
import { AText, Box, Button, Container } from "../uikit";
import styles from "./index.module.css";

export const ReportsSection = () => {
  return (
    <Box id="report_section" className={styles.section}>
      <Container>
        <Box className={styles.wrapper} direction="column">
          <Box className={styles.report_info} direction="column">
            <AText Component="h2" variant="h2">
              Подробные отчёты для вас и правообладателей
            </AText>
            <Box className={styles.report_info_items} direction="column">
              <Box className={styles.item}>
                <span></span>
                <AText>
                  Выручка, CTR, показы и другие показатели в реальном времени.
                </AText>
              </Box>
              <Box className={styles.item}>
                <span></span>
                <AText>Инструменты контроля качества трафика.</AText>
              </Box>
              <Box className={styles.item}>
                <span></span>
                <AText>
                  Ежемесячные автоматические отчёты для каждого правообладателя.
                </AText>
              </Box>
            </Box>
          </Box>
          <MainBtn>Заказать звонок</MainBtn>
        </Box>
      </Container>
    </Box>
  );
};
