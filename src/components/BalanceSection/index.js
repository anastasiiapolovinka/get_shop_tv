import Image from "next/image";
import balance from "./../../app/images/balance.png";
import { AText, Box, Container } from "../uikit";

import styles from "./index.module.css";

export const BalanceSection = () => {
  return (
    <Box id="balance_section" className={styles.section}>
      <Container>
        <Box className={styles.wrapper} direction="column">
          <AText Component="h2" variant="h2">
            Баланс между выручкой и удовлетворённостью пользователей
          </AText>
          <Box className={styles.info_items}>
            <Box className={styles.info_item} direction="column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="12" fill="#FF5900" />
                <path
                  d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                  fill="white"
                />
              </svg>
              <AText Component="h3" variant="h3">
                Частотность под контролем
              </AText>
              <AText variant="txt_2">
                Чтобы не ронять NPS и не увеличивать отток пользователей
              </AText>
            </Box>
            <Image src={balance} alt="ogange_square" />
            <Box className={styles.info_item} direction="column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="12" fill="#FF5900" />
                <path
                  d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                  fill="white"
                />
              </svg>
              <AText Component="h3" variant="h3">
                Максимальная выручка
              </AText>
              <AText variant="txt_2">
                За счёт заполенения всех рекламных мест по высокой цене
              </AText>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
