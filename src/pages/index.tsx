import SideNav from "@/components/SideNav";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ExperienceSection from "@/components/ExperienceSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SideNav />
      <div id="hero"><HeroSection /></div>
      <div id="about"><VideoSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="experience"><ExperienceSection /></div>
      <div id="education"><EducationSection /></div>
      <div id="personal"><PersonalSection /></div>
      <div id="contact"><ContactSection /></div>
    </main>
  );
};

export default Index;
