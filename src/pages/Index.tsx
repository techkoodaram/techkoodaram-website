import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinCTA from "@/components/JoinCTA";
import CommunityPillars from "@/components/CommunityPillars";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CommunityPillars />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
