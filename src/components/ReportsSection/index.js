import { forwardRef } from "react";
import { MainBtn } from "../MainBtn";
import { AText, Box, Container } from "../uikit";
import styles from "./index.module.css";

export const ReportsSection = forwardRef((props, ref) => (
    <Box ref={ref} id="report_section" className={styles.section}>
      <Container>
        <Box className={styles.wrapper} direction="column">
          <Box className={styles.report_info} direction="column">
            <AText Component="h2" variant="h2">
              Подробные отчёты для вас и правообладателей
            </AText>
            <Box className={styles.report_info_items} direction="column">
              <Box className={styles.item}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                className={styles.bullet}
              >
                <circle cx="16" cy="16" r="12" fill="#FF5900" />
                <path
                  d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                  fill="white"
                />
              </svg>
                <AText>
                  Выручка, CTR, показы и другие показатели в реальном времени.
                </AText>
              </Box>
              <Box className={styles.item}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                className={styles.bullet}
              >
                <circle cx="16" cy="16" r="12" fill="#FF5900" />
                <path
                  d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                  fill="white"
                />
              </svg>
                <AText>Инструменты контроля качества трафика.</AText>
              </Box>
              <Box className={styles.item}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                className={styles.bullet}
              >
                <circle cx="16" cy="16" r="12" fill="#FF5900" />
                <path
                  d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                  fill="white"
                />
              </svg>
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
  ));

  ReportsSection.displayName = 'ReportsSection';
