import PremiumBanner from "../Components/ui/PremiumBanner"
import HeroSection from "../Components/HeroSection";
import LeadingCompanies from "../Components/LeadingCompanies";

const logos = [
  { src: '/Home/Companies/accenture.webp', alt: 'Accenture logo' },
  { src: '/Home/Companies/citi.webp', alt: 'Citi Bank logo' },
  { src: '/Home/Companies/pwc.webp', alt: 'PwC logo' },
  { src: '/Home/Companies/kpmg.webp', alt: 'KPMG logo' },
  { src: '/Home/Companies/hdfc.webp', alt: 'HDFC Bank logo' },
  { src: '/Home/Companies/kotak.webp', alt: 'Kotak Mahindra Bank logo' },
  { src: '/Home/Companies/bcg.webp', alt: 'Boston Consulting Group (BCG) logo' },
  { src: '/Home/Companies/grantthornton.webp', alt: 'Grant Thornton logo' },
  { src: '/Home/Companies/sap.webp', alt: 'SAP logo' },
  { src: '/Home/Companies/infosis.webp', alt: 'Infosys logo' },
  { src: '/Home/Companies/relience.webp', alt: 'Reliance Industries logo' },
];

export default function Home() {

  return (
    <>
      <PremiumBanner />
      <HeroSection/>
      <LeadingCompanies logos={logos} />
    </>
  );
}
