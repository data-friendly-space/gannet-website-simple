import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Resources from "@/components/sections/Resources";
import Support from "@/components/sections/Support";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Capabilities />
      <Resources />
      <Support />
      <CTA />
    </main>
  );
}
