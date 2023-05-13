/* eslint-disable */
import React, { useEffect } from "react";
import Image from "next/image";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function Portfolio() {
  useEffect(() => {
    const scrollButtonButton = document.getElementById("scrollButton");
    if (scrollButtonButton) {
      scrollButtonButton.addEventListener("click", () => {
        const center = window.innerHeight / 1.1;
        window.scrollTo({
          top: center,
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <div className="PFContainer">
      <title>Portfolio</title>
      <div
        className="PortfolioHead"
        style={{
          // position: "relative",
          // width: "100%",
          height: "300px",
          margin: "3% 0",
          border: "solid 2px black",
          width: "100%",
          backgroundImage: "url('./images/PortfolioHead.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // opacity: "0.7"
        }}
      >
        <div className="image-container">
          {/* <Image
            className="PFHeadImage"
            src="/images/PortfolioHead.png"
            fill="true"
            objectFit="cover"
            alt="Ebook Header"
          /> */}
          <div
            className="PFtext-container"
            style={{
              textAlign: "center",
            }}
          >
            <h1>Invest for the future</h1>
            <p
              style={{
                width: "300px",
                margin: "2% 10%",
                color: "white",
                fontSize: "large",
              }}
            >
              Work with all the necessary information to boost money flow from
              your capital investment using Themoneyinvest.com
            </p>
            <button id="scrollButton">Learn More !</button>
          </div>
        </div>{" "}
      </div>

      <div className="lg:flex justify-around ">
        <div className="viewport">
          <div className="box glow">
            <img
              src="/images/image1.png"
              alt="Image 1"
              width="100"
              height="100"
            />
            <p className="BoxTitle">Title of image 1</p>
          </div>
          <div className="box glow">
            <img
              src="/images/image2.png"
              alt="Image 2"
              width="100"
              height="100"
            />
            <p className="BoxTitle">Title of image 2</p>
          </div>
        </div>
        <div className="viewport">
          <div className="box glow">
            <img
              src="/images/image3.png"
              alt="Image 3"
              width="100"
              height="100"
            />
            <p className="BoxTitle">Title of image 3</p>
          </div>
          <div className="box glow">
            <img
              src="/images/image4.png"
              alt="Image 4"
              width="100"
              height="100"
            />
            <p className="BoxTitle">Title of image 4</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio;
