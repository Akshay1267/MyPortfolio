import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">
      {/* Warm Ambient Blobs */}
      <BlurBlob
        position={{ top: "15%", left: "15%" }}
        size={{ width: "35vw", height: "35vw" }}
        color="bg-amber-300"
      />
      <BlurBlob
        position={{ top: "45%", left: "80%" }}
        size={{ width: "30vw", height: "30vw" }}
        color="bg-orange-300"
      />
      <BlurBlob
        position={{ top: "75%", left: "25%" }}
        size={{ width: "35vw", height: "35vw" }}
        color="bg-amber-200"
      />

      {/* Subtle Warm Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e2d8_1px,transparent_1px),linear-gradient(to_bottom,#e7e2d8_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_15%,#000_60%,transparent_100%)] opacity-40 pointer-events-none"></div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Work />
          <Education />
          <Certifications />
          <Events />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
