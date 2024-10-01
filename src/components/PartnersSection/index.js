import Image from "next/image";
import clickwave from "../../app/images/clickwave.png";
import zyphronix from "../../app/images/zyphronix.png";
import novasphere from "../../app/images/novasphere.png";
import { Container, Box, AText } from "../uikit";
import styles from "./index.module.css";

export const PartnersSection = () => {
  return (
    <Box className={styles.section}>
      <Container>
        <Box align="center" justify="between" className={styles.wrapper}>
          <AText Component="h3" variant="h3">
            Наши партнёры по монетизации
          </AText>
          <Box className={styles.partners} align="center">
            <Image src={clickwave} alt="clickwave" />
            <Image src={zyphronix} alt="zyphronix" />
            <Image src={novasphere} alt="novasphere" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
