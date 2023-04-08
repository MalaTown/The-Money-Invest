import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Home() {
  return (
    <div>
      <Head>
        <title>TheMoneyInvest</title>
      </Head>
      <div className="App" id="outer-container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
