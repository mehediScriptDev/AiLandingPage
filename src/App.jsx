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



function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TrustBadge/>
      <Features/>
      <StepsSection/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
