import { MainBtn } from "../MainBtn";
import { AText, Box } from "../uikit";
import styles from "./index.module.css";

export const Form = () => {
  return (
    <Box Component="form" id="form" className={styles.wrapper}>
      <textarea
        name="question"
        placeholder="Напишите свой вопрос"
        className={styles.question}
      ></textarea>
      <Box className={styles.form_section} direction="column">
        <Box className={styles.inputs_wrapper} direction="column">
          <Box direction="column">
            <input
              className={styles.email}
              type="email"
              name="email"
              placeholder="Введите e-mail"
            />
            <AText className={styles.error_message} variant="txt_error">
              Неправильно указана почта
            </AText>
          </Box>
          <Box className={styles.agreement_wrapper} align="start">
            <input
              name="agreement"
              type="checkbox"
              className={styles.agreement}
            />
            <AText
              Component="label"
              variant="txt_3"
              htmlFor="agreement"
              className={styles.label}
            >
              Я ознакомлен(а) с{" "}
              <AText
                Component="a"
                href="/"
                variant="txt_3"
                className={styles.link}
              >
                политикой конфиденциальности
              </AText>{" "}
              и согласен(на) на обработку{" "}
              <AText
                Component="a"
                href="/"
                variant="txt_3"
                className={styles.link}
              >
                персональных данных.
              </AText>
            </AText>
          </Box>
        </Box>
        <MainBtn type="submit" isFullWidth>
          Отправить
        </MainBtn>
      </Box>
    </Box>
  );
};
