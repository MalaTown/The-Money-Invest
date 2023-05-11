/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { TickerTape, MarketOverview, SingleTicker } from 'react-ts-tradingview-widgets';
import TradingViewWidget from '../components/Market-components/TradingViewWidget';

function Markets() {
  return (
    <>
      <div className="pb-2">
        <h1 className="HeadText text-5xl">Market Data</h1>
        <p className="text-center text-2xl">
          You can find all the information about Market here !
        </p>
      </div>
      <TickerTape className="" />;
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <SingleTicker
          symbol="NSE:BANKNIFTY"
          // locale="in"
          // width="100%"
          height={500}
          colorTheme="LIGHT"
        />
        <SingleTicker
          symbol="NSE:NIFTY"
          locale="in"
          width="100%"
          height={500}
          colorTheme="light"
        />
        <SingleTicker
          symbol="NSE:INDIAVIX"
          locale="in"
          width="100%"
          height={500}
          colorTheme="light"
        />
      </div>
      <div>
        <MarketOverview
          colorTheme="light"
          height={400}
          width="100%"
          showFloatingTooltip
          tabs={[
            {
              title: 'Indices',
              symbols: [
                {
                  s: 'BINANCE:BTCUSDT',
                },
                {
                  s: 'NSE:BANKNIFTY',
                },
                {
                  s: 'NSE:NIFTY',
                },
                {
                  s: 'NSE:INDIAVIX',
                },
                {
                  s: 'NSE:NIFTY',
                },
              ],
              originalTitle: 'Indices',
            },
            {
              title: 'Futures',
              symbols: [
                {
                  s: 'CME_MINI:ES1!',
                  d: 'S&P 500',
                },
                {
                  s: 'CME:6E1!',
                  d: 'Euro',
                },
                {
                  s: 'COMEX:GC1!',
                  d: 'Gold',
                },
                {
                  s: 'NYMEX:CL1!',
                  d: 'Crude Oil',
                },
                {
                  s: 'NYMEX:NG1!',
                  d: 'Natural Gas',
                },
                {
                  s: 'CBOT:ZC1!',
                  d: 'Corn',
                },
              ],
              originalTitle: 'Futures',
            },
            {
              title: 'Bonds',
              symbols: [
                {
                  s: 'CME:GE1!',
                  d: 'Eurodollar',
                },
                {
                  s: 'CBOT:ZB1!',
                  d: 'T-Bond',
                },
                {
                  s: 'CBOT:UB1!',
                  d: 'Ultra T-Bond',
                },
                {
                  s: 'EUREX:FGBL1!',
                  d: 'Euro Bund',
                },
                {
                  s: 'EUREX:FBTP1!',
                  d: 'Euro BTP',
                },
                {
                  s: 'EUREX:FGBM1!',
                  d: 'Euro BOBL',
                },
              ],
              originalTitle: 'Bonds',
            },
            {
              title: 'Forex',
              symbols: [
                {
                  s: 'FX:EURUSD',
                  d: 'EUR/USD',
                },
                {
                  s: 'FX:GBPUSD',
                  d: 'GBP/USD',
                },
                {
                  s: 'FX:USDJPY',
                  d: 'USD/JPY',
                },
                {
                  s: 'FX:USDCHF',
                  d: 'USD/CHF',
                },
                {
                  s: 'FX:AUDUSD',
                  d: 'AUD/USD',
                },
                {
                  s: 'FX:USDCAD',
                  d: 'USD/CAD',
                },
              ],
              originalTitle: 'Forex',
            },
          ]}
        />

        {/* <TradingViewWidget
          symbol="AAPL"
          interval="D"
          timezone="Etc/UTC"
          theme="light"
          style="1"
          locale="en"
          width="100%"
          height="100%"
        >
          <script
            type="text/javascript"
            src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            async
          ></script>
        </TradingViewWidget> */}
      </div>
      <div style={{width: "100%", height: "400px"}}>
      <TradingViewWidget />
      </div>
    </>
  );
}

export default Markets;
