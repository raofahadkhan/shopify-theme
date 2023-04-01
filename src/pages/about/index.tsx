import HeroSectionForAbout from "@/components/views/About/HeroSection";
import TextEffectSectionForAbout from "@/components/views/About/TextEffect";
import Navbar from "@/components/views/Navbar";

export default function About() {
  return (
    <div>
      <Navbar page="preview" />
      <HeroSectionForAbout />
      <TextEffectSectionForAbout />
    </div>
  )
}