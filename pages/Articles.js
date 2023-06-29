/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Get_Articles } from "../services";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await Get_Articles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article) => (
        <div key={article.slug} className="article w-1/3 m-4 lg:mx-8 lg:p-4 shadow-xl ">
          <div className="p-2">
            <img className="rounded-lg" src={article.featuredImage.url} alt={article.title} />
          </div>
          <p className="flex text-center text-sm min-[1024px]:text-lg">{article.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
