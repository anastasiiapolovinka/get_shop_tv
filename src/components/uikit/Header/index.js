"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../../app/images/logo.png";
import { Box } from "../Box";
import { AText } from "../AText";
import styles from "./index.module.css";
import { Container } from "../Container";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className={styles.wrapper}>
      <Container>
        <Box
          className={clsx([styles.header, isScrolled && styles.scrolled])}
          Component="nav"
          align="center"
          justify="between"
        >
          <Image src={logo} width={161} height={40} alt="logo" />
          <Box className={styles.nav}>
            <AText
              className={styles.nav_item}
              Component="a"
              href="#balance_section"
              variant="btn"
            >
              Преимущества
            </AText>
            <AText
              className={styles.nav_item}
              Component="a"
              href="#report_section"
              variant="btn"
            >
              Как работаем
            </AText>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
