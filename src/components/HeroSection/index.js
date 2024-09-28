import { AText, Box, Button, Container } from "../uikit";
import { GainSources } from "./GainSources";

import styles from "./index.module.css";

export const HeroSection = () => {
  return (
    <Box className={styles.section}>
      <Container>
        <Box className={styles.wrapper} direction="column">
          <Box className={styles.content} direction="column">
            <Box className={styles.call_to_action} direction="column">
              <Box className={styles.headings} direction="column">
                <AText variant="h1" Component="h1">
                  Монетизируйте клиентскую базу, не снижая NPS
                </AText>
                <AText className={styles.hint} variant="h3" Component="h3">
                  Найдите идеальный баланс выручки
                  <br /> и удовлетворённости пользователей c платформой
                  <br /> рекламной монетизации
                </AText>
              </Box>
              <Button className={styles.btn}>Заказать звонок</Button>
            </Box>
            <Box className={styles.footer}>
              <AText Component="h2" variant="h2">
                Дополнительные источники выручки для разных компаний
              </AText>
              <GainSources />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
