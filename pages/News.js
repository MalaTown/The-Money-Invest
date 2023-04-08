/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-eval */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-named-as-default */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import NewsApp from '../components/NewsApp';
import Footer from '../components/Footer';

function News() {
  useEffect(() => {
    if (
      typeof window !== 'undefined'
      && typeof stockdio_events === 'undefined'
    ) {
      window.stockdio_events = true;
      const stockdio_eventMethod = window.addEventListener
        ? 'addEventListener'
        : 'attachEvent';
      const stockdio_eventer = window[stockdio_eventMethod];
      const stockdio_messageEvent = stockdio_eventMethod == 'attachEvent' ? 'onmessage' : 'message';
      stockdio_eventer(
        stockdio_messageEvent,
        (e) => {
          if (
            typeof e.data !== 'undefined'
            && typeof e.data.method !== 'undefined'
          ) {
            eval(e.data.method);
          }
        },
        false,
      );
    }
  }, []);
  return (
    <div className="NewsContainer">

      <div
        className="NewsHead"
        style={{ position: 'relative', height: '200px' }}
      >
        <Image
          src="/images/NewsHead.jpg"
          className="HeadImage"
          alt="News-Head"
          // width="1080"
          // height="100"
          fill="true"
          objectFit="contain"
        />
      </div>

      <div
        className="news-container"
        style={{ backgroundColor: '#f2f3eb', border: '2px solid' }}
      >
        <div className="quick-news-section">
          <iframe
            id="st_5d8d056ac7be4f069c953ce5859b4e84"
            frameBorder="0"
            scrolling="no"
            width="100%"
            height="100%"
            src="https://api.stockdio.com/visualization/financial/charts/v1/EconomicNews?app-key=3E4F76940A5748A1814EA2158EC556C3&imageWidth=80&imageHeight=80&maxItems=5&maxDescriptionSize=50&palette=Financial-Light&title=Quick%20News&googleFont=true&backgroundColor=f2f3eb&titleColor=000000&newsDescriptionColor=757575&newsDateTimeColor=086c6c&separatorColor=000000&onload=st_5d8d056ac7be4f069c953ce5859b4e84"
          />
        </div>
        <div className="popular-news-section">
          <iframe
            id="st_3ff944b866d245ecb234ef21eede23e3"
            frameBorder="0"
            scrolling="no"
            width="100%"
            height="100%"
            src="https://api.stockdio.com/visualization/financial/charts/v1/EconomicNews?app-key=3E4F76940A5748A1814EA2158EC556C3&language=English&country=India&countryUsage=mixed&maxCountryNews=3&imageWidth=200&maxItems=4&maxDescriptionSize=50&palette=Financial-Light&title=Popular%20News&backgroundColor=f2f3eb&newsDateTimeColor=009191&separatorColor=000000&onload=st_3ff944b866d245ecb234ef21eede23e3"
          />
        </div>
        <div className="trending-news-section">
          <iframe
            id="st_af783f6443954f668d6289a018cf52e1"
            frameBorder="0"
            scrolling="no"
            width="100%"
            height="100%"
            src="https://api.stockdio.com/visualization/financial/charts/v1/EconomicNews?app-key=3E4F76940A5748A1814EA2158EC556C3&language=Hindi&country=India&countryUsage=mixed&imageWidth=80&imageHeight=80&maxItems=5&maxDescriptionSize=50&palette=Financial-Light&title=Trending%20News&googleFont=true&backgroundColor=f2f3eb&titleColor=000000&newsDescriptionColor=757575&newsDateTimeColor=086c6c&separatorColor=000000&onload=st_af783f6443954f668d6289a018cf52e1"
          />
        </div>
      </div>

      <div style={{ backgroundColor: '#f2f3eb', border: '2px solid' }}>
        <NewsApp />{' '}
      </div>

      <Footer />
    </div>
  );
}

export default News;
