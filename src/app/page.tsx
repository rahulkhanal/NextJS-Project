"use client";
import Login from "@/components/Login";
import Banner from "../components/Banner";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "@/components/Service";
import Mission from "@/components/Mission";
import Pricing from "@/components/Pricing";
import Request from "@/components/Request";
import Meet from "@/components/Meet";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div>
      <Banner />
      <Login />
      <Services />
      <Mission />
      <Pricing />
      <Request />
      <Meet />
    </div>
  );
};

export default Page;
