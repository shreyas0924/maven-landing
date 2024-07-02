import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import Instructions from "./components/Instructions";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <HowItWorks /> */}
      <Instructions />
      <ScrollToTop />
    </>
  );
}

export default App;
