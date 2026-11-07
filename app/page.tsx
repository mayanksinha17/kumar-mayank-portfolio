import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import DevOps from "@/components/DevOps";
import OpenSource from "@/components/OpenSource";
import GitHubPanel from "@/components/GitHubPanel";
import LearningJourney from "@/components/LearningJourney";
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
      <Projects />
      <DevOps />
      <OpenSource />
      <GitHubPanel />
      <LearningJourney />
      <Milestones />
      <OpenToAndCertifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
