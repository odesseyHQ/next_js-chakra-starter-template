import React from "react";
import type { NextPage } from "next";
import TitleBanner from "../components/pages/home/title-banner/TitleBanner";
import AppLayout from "@/layout/AppLayout";

const Home: NextPage = () => {
  const servicesDivRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <AppLayout servicesDivRef={servicesDivRef}>
      <TitleBanner />
    </AppLayout>
  );
};

export default Home;
