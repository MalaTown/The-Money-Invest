/* eslint-disable */
import React from "react";
import Head from "next/head";
import Footer from "../components/Layout/Footer";
import Content from "../components/Content";

function Home() {
  return (
    <div>
      <Head>
        <title>The Money Invest - Financial News, Financial Blogs & Articles</title>
      </Head>
      <div className="App" id="outer-container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
