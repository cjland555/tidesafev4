import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoEmbed from "@/components/VideoEmbed";
import TideSlider from "@/components/TideSlider";
import Story from "@/components/Story";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AssessmentForm from "@/components/AssessmentForm";
import ContactBand from "@/components/ContactBand";
import FAQ from "@/components/FAQ";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TideSlider />
        <VideoEmbed />
        <Story />
        <Services />
        <HowItWorks />
        <ContactBand />
        <AssessmentForm />
        <FAQ />
        <Sources />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
