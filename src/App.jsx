import "./App.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import "./index.css";
import Faq from "./sections/faq/Faq";
import Hero from "./sections/hero/Hero";
import TrustBadge from "./sections/TrustBadge/TrustBadge";



function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TrustBadge/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
