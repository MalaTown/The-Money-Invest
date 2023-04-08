/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

if (typeof document !== 'undefined') {
  const scrollButtonButton = document.getElementById('scrollButton');
  scrollButtonButton.addEventListener('click', () => {
    const center = window.innerHeight / 1.1;
    window.scrollTo({
      top: center,
      behavior: 'smooth',
    });
  });
}

function Portfolio() {
  return (
    <div className="PFContainer" style={{ background: '#F2F3EB' }}>
      <title>Portfolio</title>
      <div
        className="PortfolioHead"
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          marginBottom: '5%',
        }}
      >
        <div className="image-container ">
          <Image
            className="PFHeadImage"
            src="/images/PortfolioHead.png"
            fill="true"
            objectFit="cover"
            alt="Ebook Header"
          />
          <div
            className="PFtext-container"
            style={{
              textAlign: 'center',
            }}
          >
            <h1>Invest for the future</h1>
            <p
              style={{
                width: '300px',
                margin: '2% 10%',
                color: 'white',
                fontSize: 'large',
              }}
            >
              Work with all the necessary information to boost money flow from
              your capital investment using Themoneyinvest.com
            </p>
            <button id="scrollButton">Learn More !</button>
          </div>
        </div>{' '}
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
        {/* <div class="box glow">
            <img
              src="/images/image5.png"
              alt="Image 5"
              width="100"
              height="100"
            ></img>
            <p>Title of image 5</p>
          </div>
        </div>
        <div class="viewport">
          <div class="box glow">
            <img
              src="/images/image6.png"
              alt="Image 6"
              width="100"
              height="100"
            ></img>
            <p>Title of image 6</p>
          </div>
          <div class="box glow">
            <img
              src="/images/image7.png"
              alt="Image 7"
              width="100"
              height="100"
            ></img>
            <p>Title of image 7</p>
          </div>
          <div class="box glow">
            <img
              src="/images/image8.png"
              alt="Image 8"
              width="100"
              height="100"
            ></img>
            <p>Title of image 8</p>
          </div>
          <div class="box glow">
            <img
              src="/images/image9.png"
              alt="Image 9"
              width="100"
              height="100"
            ></img>
            <p>Title of image 9</p>
          </div>
          <div class="box glow glow">
            <img
              src="/images/image10.png"
              alt="Image 10"
              width="100"
              height="100"
            ></img>
            <p>Title of image 10</p>
          </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio;
