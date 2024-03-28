import AboutPage from "./section-page/AboutPage";
import FloatingNavbar from "./elements/Navbar";
import HomePage from "./section-page/HomePage";
import SkillPage from "./section-page/SkillPage";
import ProjectPage from "./section-page/ProjectPage";
import Footer from "./elements/Footer";

export default function Home() {
  return (
    <main className="font-dosis">
      <FloatingNavbar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <Footer />
    </main>
  );
}
