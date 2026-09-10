import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import LearningJourney from "@/components/LearningJourney";
import DevOps from "@/components/DevOps";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import GitHubPanel from "@/components/GitHubPanel";
import Milestones from "@/components/Milestones";
import OpenToAndCertifications from "@/components/OpenToAndCertifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <LearningJourney />
      <DevOps />
      <Projects />
      <OpenSource />
      <GitHubPanel />
      <Milestones />
      <OpenToAndCertifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
