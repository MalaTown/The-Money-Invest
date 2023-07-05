/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Get_Affiliates } from "../services";
import Link from 'next/link'

const Affiliates = () => {
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        const fetchedAffiliates = await Get_Affiliates();
        setAffiliates(fetchedAffiliates);
      } catch (error) {
        console.error("Error fetching affiliates:", error);
      }
    };

    fetchAffiliates();
  }, []);

  return (
      <div className="flex flex-wrap justify-center">
      <title>Affiliate</title>
        {affiliates.map((affiliate) => (
          <div
            key={affiliate.slug}
            className=" border-solid border-2 affiliate w-2/5 lg:w-1/3 m-2 lg:mx-8 lg:p-4 p-2 shadow-xl rounded-xl "
          >
            <div className="rounded-lg p-1">
              <img
                className="rounded-lg shadow-xl w-full lg:h-48 h-24 object-cover"
                src={affiliate.featuredImage.url}
                alt={affiliate.title}
              />
            </div>
            <p className=" text-center pt-2 text-sm font-bold min-[1024px]:text-lg">
              {affiliate.title}
            </p>
            <div className="mt-4 flex justify-center ">
              <Link
                href={affiliate.link}
                className=" rounded-full bg-blue-900 hover:bg-blue-700 transition duration-700 text-white text-sm font-semibold p-1 lg:py-2 lg:px-4"
              >
                <span>Continue</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Affiliates;
