import About from "@/components/ui/layout/About";
import Contact from "@/components/ui/layout/Contact";
import Hero from "@/components/ui/layout/Hero";
import LatestProject from "@/components/ui/layout/Latest-Project";
import Testimonial from "@/components/ui/layout/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <div className="p-4 bg-gray-50">
        <About />
        <LatestProject />
        <Testimonial />
        <Contact />
      </div>
    </main>
  );
}
