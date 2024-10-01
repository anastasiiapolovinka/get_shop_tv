"use client"
import {
  BalanceSection,
  HeroSection,
  ReportsSection,
  Footer,
  PartnersSection,
} from "@/components";
import { Header } from "@/components/uikit";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const { activeSection, section1Ref, section2Ref } = useActiveSection();
  return (
    <>
      <Header activeSection={activeSection} />
      <HeroSection />
      <BalanceSection ref={section1Ref} />
      <PartnersSection />
      <ReportsSection ref={section2Ref} />
      <Footer />
    </>
  );
}
