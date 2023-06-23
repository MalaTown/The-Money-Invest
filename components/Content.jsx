/* eslint-disable */
import React from "react";
import CompoundInterestCalculator from "./Calculator";
import RecentPosts from "./RecentPost";
import MixedNewsComponent from "./News-components/MixedNewsComponent";

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
        className=" lg:mx-16 flex flex-col md:flex-row my-8"
      >
        <div
          className="p-2 "
          style={{
            backgroundColor: "#0f4772",
            boxShadow: "black 0px 2px 10px",
            borderRadius: "10px",
          }}
        >
          <MixedNewsComponent />
        </div>
        <div
          style={{ display: "flex" }}
          className=" lg:mx-16 flex flex-col md:flex-row mt-6 lg:mt-0 w-full lg:w-2/4 "
        >
          <div
            className="p-2 w-full"
            style={{
              backgroundColor: "#0f4772",
              boxShadow: "black 0px 2px 10px",
              borderRadius: "10px",
            }}
          >
            <CompoundInterestCalculator />
          </div>
        </div>
      </div>

      <div className="my-8 ">
        <RecentPosts />
      </div>
    </div>
  );
}

export default Content;
