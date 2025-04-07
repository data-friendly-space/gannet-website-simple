import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Resources from "@/components/sections/Resources";
import Support from "@/components/sections/Support";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <Resources />
      <Support />
      <CTA />
    </main>
  );
}
