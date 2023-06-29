/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Get_Affiliate } from "../services";

const Affiliate = () => {
  const [affiliate, setAffiliate] = useState([]);

  useEffect(() => {
    const fetchAffiliate = async () => {
      try {
        const fetchedAffiliate = await Get_Affiliate();
        setAffiliate(fetchedAffiliate);
      } catch (error) {
        console.error("Error fetching affiliate:", error);
      }
    };

    fetchAffiliate();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {affiliate.map((affiliate) => (
        <div
          key={affiliate.slug}
          className="affiliate w-1/3 m-4 lg:mx-8 lg:p-4 shadow-xl "
        >
          <div className="p-2">
            <img
              className="rounded-lg"
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

export default Affiliate;
