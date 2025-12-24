import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CommunityPillars from "@/components/CommunityPillars";
import Gatherings from "@/components/Gatherings";
import BlogSection from "@/components/BlogSection";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <CommunityPillars />
        <Gatherings />
        <BlogSection />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
