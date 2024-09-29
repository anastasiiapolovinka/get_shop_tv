import { Form } from "../Form";
import { Box, Container, AText } from "../uikit";
import styles from "./index.module.css";

export const Footer = () => {
  return (
    <Box Component="footer" className={styles.footer}>
      <Container>
        <Box className={styles.info} direction="column">
          <AText Component="h2" variant="h2">
            Заполните форму
          </AText>
          <Form />
        </Box>
      </Container>
    </Box>
  );
};
