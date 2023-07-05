/* eslint-disable */

import React from "react";
import PopularNews from "../components/News-components/PopularNews";
import TopNews from "../components/News-components/TopNews";
import RecentNews from "../components/News-components/RecentNews";
import TrendingNews from "../components/News-components/TrendingNews";

export default function News() {
  return (
    <>
      <title>Financial News</title>
      <div className="max-md:mx-8 flex flex-col items-center">
        <h1 className="border-black border-y-2 md:my-4   ">Top News</h1>
        <div className="container">
          <TopNews />
        </div>
        <div className="container items-center border-solid border-b-2 border-black mb-4 pb-4">
          <div className="NewsSection2  mt-4 ">
            <div className="mr-4 NewsBoxType2 ">
              <h1 className="border-black border-y-2 my-2 bg-white rounded-xl">
                Recent News
              </h1>
              <RecentNews />
            </div>
            <div className="mr-4 NewsBoxType1">
              <h1 className="border-black border-y-2 my-2 bg-white rounded-xl">
                Popular News
              </h1>
              <div className="row grid grid-cols-12 gap-2 ">
                <PopularNews />
              </div>
            </div>

            <div className="NewsBoxType2">
              <h1 className="border-black border-y-2 my-2 bg-white rounded-xl">
                Trending News
              </h1>
              <TrendingNews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
