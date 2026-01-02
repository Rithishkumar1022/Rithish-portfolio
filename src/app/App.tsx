import { NavbarAgency } from "./components/NavbarAgency";
import { HeroAgency } from "./components/HeroAgency";
import { AboutAgency } from "./components/AboutAgency";
import { ProjectsAgency } from "./components/ProjectsAgency";
import { ExperienceAgency } from "./components/ExperienceAgency";
import { ContactAgency } from "./components/ContactAgency";
import { BackToTop } from "./components/BackToTop";
import { SEO } from "./components/SEO";
import { PageLoader } from "./components/PageLoader";
import { ReactLenis } from "lenis/react";

export default function App() {
  const lenisOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical' as const,
    gestureDirection: 'vertical' as const,
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <>
      <PageLoader />
      <ReactLenis root options={lenisOptions}>
        <SEO />
        <div 
          className="relative min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white antialiased"
          style={{ position: 'relative' }}
        >
          <NavbarAgency />
          
          <main className="relative w-full" style={{ position: 'relative' }}>
            <HeroAgency />
            <AboutAgency />
            <ProjectsAgency />
            <ExperienceAgency />
            <ContactAgency />
          </main>

          <BackToTop />
        </div>
      </ReactLenis>
    </>
  );
}