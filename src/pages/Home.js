import React from "react";
import Nav from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import bannerHome from "../styles/assets/Banner.png";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner title="Chez vous, partout et ailleurs" image={bannerHome} />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
