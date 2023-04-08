/* eslint-disable no-eval */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';

function StockdioChart() {
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
      const stockdio_messageEvent = stockdio_eventMethod === 'attachEvent' ? 'onmessage' : 'message';
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
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe
      id="st_313a53f98860411e85d2aa9c0431845c"
      frameBorder="0"
      scrolling="no"
      width="400"
      height="100%"
      // eslint-disable-next-line max-len
      src="https://api.stockdio.com/visualization/financial/charts/v1/MarketOverview?app-key=3E4F76940A5748A1814EA2158EC556C3&stockExchange=NSE&includeEquitiesName=true&includePrice=false&showHeader=true&palette=Financial-Light&onload=st_313a53f98860411e85d2aa9c0431845c"
    />
  );
}

export default StockdioChart;
