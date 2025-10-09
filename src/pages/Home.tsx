import Benefits from "../components/Benefits";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
};

export default HomePage;
