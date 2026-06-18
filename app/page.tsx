import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Concept } from "@/components/sections/concept";
import { Plan } from "@/components/sections/plan";
import { Segments } from "@/components/sections/segments";
import { Infrastructure } from "@/components/sections/infrastructure";
import { Projects } from "@/components/sections/projects";
import { Network } from "@/components/sections/network";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Concept />
        <Plan />
        <Segments />
        <Infrastructure />
        <Projects />
        <Network />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
