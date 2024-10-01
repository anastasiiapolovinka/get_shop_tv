"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../../app/images/logo.png";
import close from "../../../app/images/close.png";
import burger from "../../../app/images/burger.png";
import { Box } from "../Box";
import { AText } from "../AText";
import styles from "./index.module.css";
import { Container } from "../Container";

export const Header = ({ activeSection }) => {
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <Box className={styles.wrapper}>
      <Container>
        <Box
          className={clsx([styles.header, isScrolled && styles.scrolled])}
          Component="nav"
          align="center"
          justify="between"
        >
          <Image
            src={logo}
            width={161}
            height={40}
            alt="logo"
            className={styles.logo}
          />
          <Box className={styles.nav}>
            <AText
              href="#balance_section"
              className={clsx([styles.nav_item, activeSection === 'section1' && styles.active])}
              Component="a"
              variant="btn"
            >
              Преимущества
            </AText>
            <AText
              href="#report_section"
              className={clsx([styles.nav_item, activeSection === 'section2' && styles.active])}
              Component="a"
              variant="btn"
            >
              Как работаем
            </AText>
          </Box>
          <Box className={styles.burgerMenu} onClick={toggleMenu}>
            {menuOpen ? (
              <Image src={close} alt="Close Menu" className={styles.icon} />
            ) : (
              <Image src={burger} alt="Open Menu" className={styles.icon} />
            )}
          </Box>
          <Box
            Component="nav"
            align="center"
            justify="start"
            className={clsx([styles.mobileMenu, menuOpen && styles.menuOpen])}
          >
            <Box Component="ul" direction="column">
              <Box Component="li">
                <AText
                  className={styles.nav_item}
                  Component="a"
                  href="#balance_section"
                  variant="btn"
                >
                  Преимущества
                </AText>
              </Box>
              <Box Component="li">
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
