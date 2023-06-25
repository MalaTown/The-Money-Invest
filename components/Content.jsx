/* eslint-disable */
import React from "react";
import Link from "next/link";
import CompoundInterestCalculator from "./Calculator";
import RecentPosts from "./RecentPost";
import MixedNewsComponent from "./News-components/MixedNewsComponent";


function Content() {
  return (
    <div className="MainDataDiv">
      <div className="ContentDiv">
        <h5 className="TagLine"> YOUR FINANACIAL MARKET BOSS </h5>
        <h1 className="Heading" style={{ textAlign: "start" }}>
          The Money Invest
        </h1>

        <div className="flex">
          <Link href="https://zerodha.com/open-account?c=AL3820">
            <img
              // className="w-14 h-14 logoimage border-4 border-blue-900 rounded-full p-1"
              src="/images/Stock_top_icon.png"
              width="150"
              height="40"
              alt="StockAccount"
              className="topicons"
            />
          </Link>
          <Link href="https://wazirx.com/invite/nc8g2fgz">
            <img
              src="/images/Crypto_top_icon.png"
              width="150"
              height="40"
              alt="Crypto"
              className="topicons"
            />
          </Link>
        </div>
      </div>
      <div className="background-div"></div>

      <div
        style={{ display: "flex" }}
        className=" lg:mx-16 flex flex-col lg:flex-row my-8"
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
