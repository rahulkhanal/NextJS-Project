"use client";
import Login from "@/components/Login";
import Banner from "../components/Banner";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "@/components/Service";
import Mission from "@/components/Mission";

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
    </div>
  );
};

export default Page;
