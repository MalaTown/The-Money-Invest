/* eslint-disable  */
import React, { useState, useEffect } from "react";
import { Get_Affiliates } from "../services";

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
      {affiliates.map((affiliate) => (
        <div
          key={affiliate.slug}
          className="affiliate w-1/3 m-4 lg:mx-8 lg:p-4 shadow-xl"
        >
          <div className="p-2">
            <img
              className="rounded-lg shadow-xl "
              src={affiliate.featuredImage.url}
              alt={affiliate.title}
            />
          </div>
          <p className="flex text-center text-sm min-[1024px]:text-lg">
            {affiliate.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Affiliates;
