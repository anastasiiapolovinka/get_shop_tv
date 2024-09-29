import {
  BalanceSection,
  HeroSection,
  ReportsSection,
  Footer,
  PartnersSection,
} from "@/components";
import { Header } from "@/components/uikit";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BalanceSection />
      <PartnersSection />
      <ReportsSection />
      <Footer />
    </>
  );
}
