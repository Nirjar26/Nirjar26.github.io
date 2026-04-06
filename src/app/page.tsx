import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Bio from "@/components/Bio";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bio />
      <Works />
      <About />
      <Journey />
      <Contact />
    </main>
  );
}
