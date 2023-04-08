/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

function Ebook() {
  return (
    <div className="EbookContainer">
      <title>Ebook</title>
      <div
        className="EbookHead"
        style={{ position: 'relative', height: '200px' }}
      >
        <Image
          className="HeadImage object-contain"
          src="/images/Ebookhead.png"
          fill="true"
          alt="Ebook Header"
        />
      </div>

      <h1 className="HeadText">E-Books</h1>
      {/* <div
        className="EbookSection"
        style={{ backgroundImage: 'url(/images/background.jpg)', opacity: 0.2}}
      >
        */}

      <div className="EbookSection">
        <div className="lg:flex">
          <div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TheDisciplinedtrader.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Disciplined trader</h1>
                <button className="btn btn-success">Download </button>
              </div>
            </div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TheIntelligentInvestor.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
              </div>
              <h1 className="EbookTitle">The Intelligent Investor</h1>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TradingInTheZone.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">Trading In The Zone</h1>
                <button className="btn btn-success Downloadbtn">
                  Download
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TheDisciplinedtrader.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Disciplined trader</h1>
                <button className="btn btn-success">Download </button>
              </div>
            </div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TheIntelligentInvestor.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
              </div>
              <h1 className="EbookTitle">The Intelligent Investor</h1>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TradingInTheZone.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">Trading In The Zone</h1>
                <button className="btn btn-success Downloadbtn">
                  Download
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TheDisciplinedtrader.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">The Disciplined trader</h1>
                <button className="btn btn-success">Download </button>
              </div>
            </div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TheIntelligentInvestor.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
              </div>
              <h1 className="EbookTitle">The Intelligent Investor</h1>
              <button className="btn btn-success Downloadbtn">Download</button>
            </div>
            <div className="BookContainer photo">
              <div className="">
                <Image
                  className="BookImage"
                  src="/images/TradingInTheZone.jpg"
                  width="150"
                  height="200"
                  alt="Ebook Header"
                />
                <h1 className="EbookTitle">Trading In The Zone</h1>
                <button className="btn btn-success Downloadbtn">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className="EbookSection__image"
          src="/images/background.jpg"
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.3,
            margin: '10px',
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Ebook;
