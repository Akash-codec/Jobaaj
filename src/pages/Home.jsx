import PremiumBanner from "../Components/ui/PremiumBanner";
import BrandMarquee from "../Components/BrandMarquee";
import HeroSection from "../Components/Home/HeroSection.jsx";
import JobLearning from "../Components/Home/JobLearning.jsx";
import RightRole from "../Components/Home/RightRole.jsx";
import GoodLife from "../Components/Home/GoodLife.jsx";
import ExploreCompanies from "../Components/Home/ExploreCompanies.jsx";

const logos = [
  { src: "/Home/Companies/accenture.webp", alt: "Accenture logo" },
  { src: "/Home/Companies/citi.webp", alt: "Citi Bank logo" },
  { src: "/Home/Companies/pwc.webp", alt: "PwC logo" },
  { src: "/Home/Companies/kpmg.webp", alt: "KPMG logo" },
  { src: "/Home/Companies/hdfc.webp", alt: "HDFC Bank logo" },
  { src: "/Home/Companies/kotak.webp", alt: "Kotak Mahindra Bank logo" },
  { src: "/Home/Companies/bcg.webp", alt: "Boston Consulting Group (BCG) logo",},
  { src: "/Home/Companies/grantthornton.webp", alt: "Grant Thornton logo" },
  { src: "/Home/Companies/sap.webp", alt: "SAP logo" },
  { src: "/Home/Companies/infosis.webp", alt: "Infosys logo" },
  { src: "/Home/Companies/relience.webp", alt: "Reliance Industries logo" },
];


export default function Home() {
  return (
    <>
      <PremiumBanner />
      {/* Hero Section  */}
      <HeroSection/>

      {/* brand marquee  */}
      <section className="bg-white w-full mt-15 overflow-hidden">
        <div>
          <div className="mx-auto flex flex-col items-center gap-10 justify-between">
            <div className="mb-10 shrink-0 text-center lg:mb-0 lg:text-left">
              <h2 className="text-[25px] lg:text-[35px] font-bold leading-[21px] text-dark-text">
                Hired by Leading Companies
              </h2>
            </div>
            <BrandMarquee logos={logos} />
          </div>
        </div>
      </section>

      {/* joblearing section  */}
      <JobLearning/>

      {/* Find the Right Role for you */}
      <RightRole/>

      {/* Good life good company */}
      <GoodLife/>
      
      {/* explore companies */}
      <ExploreCompanies/>
      
    </>
  );
}
