import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Resources from "@/components/sections/Resources";
import Pricing from "@/components/sections/Pricing";
import Support from "@/components/sections/Support";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Resources />
      <Pricing />
      <Support />
      <CTA />
    </main>
  );
}
