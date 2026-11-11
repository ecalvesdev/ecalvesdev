import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { CinematicExperience } from "@/components/sections/CinematicExperience";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HomeCta } from "@/components/sections/HomeCta";
import { Stack } from "@/components/sections/Stack";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: "https://ecalves.dev",
  email: site.email,
  sameAs: [site.social.github, site.social.linkedin, site.social.instagram],
  jobTitle: "Software Engineer",
  description:
    "Engenharia de software, desenvolvimento full-stack, automação e soluções com inteligência artificial.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stack />
      <Experience />
      <About />
      <Approach />
      <CinematicExperience />
      <HomeCta />
    </>
  );
}
