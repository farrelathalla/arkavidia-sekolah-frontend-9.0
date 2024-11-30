"use client";
import Hero from "../components/Hero";
import CountdownClose from "../components/CountdownClose";
import WhatIs from "../components/WhatIs";
import Timeline from "../components/Timeline";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <CountdownClose />
      <WhatIs />
      <Timeline />
      <Faq />
      <Footer />
    </main>
  );
};

export default page;
