import React from "react";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import FAQ from "../FAQ/FAQ";
import SubscribeNewsletter from "../SubscribeNewsletter/SubscribeNewsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <FAQ></FAQ>
      <SubscribeNewsletter></SubscribeNewsletter>
    </div>
  );
};

export default Home;
