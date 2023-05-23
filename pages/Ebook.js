/* eslint-disable */
import React from "react";
import Image from "next/image";
import Footer from "../components/Layout/Footer";

function Ebook() {
  return (
    <div className="EBookBox">
      <title>Ebook</title>

      <h1 className="HeadText my-8 text-2xl flex justify-center ">E-Books</h1>

      <div className="EbookSection">
        <div className="lg:flex">
          <div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TheDisciplinedtrader.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Disciplined trader 1</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download </button>
            </div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TheIntelligentInvestor.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Intelligent Investor 2</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TradingInTheZone.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">Trading In The Zone3</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
          </div>
          <div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TheDisciplinedtrader.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Disciplined trader4 </h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download </button>
            </div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TheIntelligentInvestor.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Intelligent Investor</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TradingInTheZone.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">Trading In The Zone</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
          </div>
          <div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TheDisciplinedtrader.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Disciplined trader 6</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download </button>
            </div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TheIntelligentInvestor.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Intelligent Investor</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
            <div className="BookContainer">
              <div className="BookBox photo">
                <Image
                  className="BookImage"
                  src="/images/TradingInTheZone.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">Trading In The Zone</h1>
              </div>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
          </div>
        </div>
        <img
          className="EbookSection__image"
          src="/images/background.jpg"
          alt="Background"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Ebook;
