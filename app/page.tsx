import { siteData } from "@/data/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar data={siteData} />
      <Hero data={siteData} />
      <Benefits data={siteData} />
      <About data={siteData} />
      <Services data={siteData} />
      <Portfolio data={siteData} />
      <Testimonials data={siteData} />
      <FAQ data={siteData} />
      <CTA data={siteData} />
      <Footer data={siteData} />
    </main>
  );
}
