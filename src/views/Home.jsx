import Header from "../components/Header";
import HeroSection from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#843E71] to-[#feffbb] min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default Home;
