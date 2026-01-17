import "./App.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import "./index.css";
import Cta from "./sections/Cta/Cta";
import Faq from "./sections/faq/Faq";
import Features from "./sections/features/Features";
import Hero from "./sections/hero/Hero";
import { StepsSection } from "./sections/howItWorks/StepsSection";
import TrustBadge from "./sections/TrustBadge/TrustBadge";
import SmoothScroll from "./Components/utility/SmoothScroll";
import ScrollToTopButton from "./Components/utility/ScrollToTopButton";
import UseCases from "./sections/useCases/UseCases";
import SocialProof from "./sections/socialProof/SocialProof";
import WhatItIs from "./sections/whatItIs/WhatItIs";
import FeaturesDetailed from "./sections/featuresDetailed/FeaturesDetailed";



function App() {
  return (
    <SmoothScroll>
      <div>
        <Header/>
        <Hero/>
        <SocialProof/>
        <UseCases/>
        <WhatItIs/>
        <FeaturesDetailed/>
        <TrustBadge/>
        <Features/>
        <StepsSection/>
        <Faq/>
        <Cta/>
        <Footer/>
        <ScrollToTopButton />
      </div>
    </SmoothScroll>
  );
}

export default App;
