import React from "react";
import Hero from "../components/Hero";
import Itinerary from "../components/Itinerary";
import BookingTriggers from "../components/BookingTriggers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Itinerary />
      <BookingTriggers />
      <Footer />
    </>
  );
};

export default Home;
