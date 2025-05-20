import About from "@/components/ui/layout/About";
import Contact from "@/components/ui/layout/Contact";
import Hero from "@/components/ui/layout/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <div className="p-4 bg-gray-50">
        <About />
        <Contact />
      </div>
    </main>
  );
}
