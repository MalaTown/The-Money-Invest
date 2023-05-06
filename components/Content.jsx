/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable */
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import Image from "next/image";
import Polling from "./PollingSection";
import StockdioChart from "./Stockchart";
// import NewsPostCard from './NewsPostCard';

function Content() {
  return (
    <div className="MainDataDiv">
      <div
        className="ContentDiv"
        style={
          {
            // backgroundImage: "url('./images/sl_121021_47240_201.jpg')",
            // width: "100%",
            // backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }
        }
      >
        <h5 className="TagLine"> YOUR FINANACIAL MARKET BOSS </h5>
        <h1 className="Heading" style={{ textAlign: "start" }}>
          The Money Invest
        </h1>

        <div className="flex">

          <a href="https://zerodha.com/open-account?c=AL3820">
            <img
              // className="w-14 h-14 logoimage border-4 border-blue-900 rounded-full p-1"
              src="/images/Stock_top_icon.png"
              height="40"
              width="130"
              alt="StockAccount"
              className="topicons"
            />
          </a>
          <a href="./Ebook">
            <img
              src="/images/Ebook_top_icon.png"
              height="40"
              width="130"
              alt="EBooks"
              className="topicons"
            />
          </a>
          <a href="">
            <img
              src="/images/Crypto_top_icon.png"
              width="130"
              height="40"
              alt="Crypto"
              className="topicons"
            />
          </a>
        </div>
      </div>
      <div
        style={{ display: "flex" }}
        className=" content-box lg:mx-16 flex flex-col md:flex-row"
      >
        <div className="row-span-3">
          <div
            className="p-7"
            style={{
              backgroundColor: "#0f4772",
              boxShadow: "black 0px 2px 10px",
              borderRadius: "10px",
            }}
          >
            <div
              className="PollContainer"
              style={{
                width: "100%",
                backgroundImage: "url('./images/QuizBg.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // opacity: "0.7"
              }}
            >
              <h1 className="text-2xl font-serif font-semibold">
                Market Sentiments
              </h1>
              <Polling />
              <div className="MStext">
                <a className="text-gray-600 " href="">
                  Learn More
                </a>{" "}
                about Market Status{" "}
              </div>
            </div>
          </div>

          <div className="DivChart" style={{ width: "100%" }}>
            <h1>Market Data</h1>
            <StockdioChart />
          </div>
        </div>
        <div
          className="p-7 my-4 lg:ml-20 md:m-0 sm:m-0"
          style={{
            backgroundColor: "#0f4772",
            boxShadow: "black 0px 2px 10px",
            borderRadius: "10px",
            backgroundImage: "url('./images/QuickNewsBG.png')",
            // width: "400px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div
            className="NewsBlock lg:w-72 md:w-full"
            style={{
              // backgroundColor: "white",
              border: "1px solid",
              height: "396px",
              padding: "20px",
              position: "relative",
              top: "10%",
              marginRight: "32px",
            }}
          >
            <h1>Latest Posts</h1>
            {/* {newsposts.map((post, index) => (
            <NewsPostCard key={index} post={post.node} />
          ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
