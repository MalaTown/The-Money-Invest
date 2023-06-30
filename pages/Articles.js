/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Get_Articles } from "../services";
import moment from "moment";

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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      const truncated = text.substr(0, maxLength);
      const lastSpaceIndex = truncated.lastIndexOf(" ");
      if (lastSpaceIndex !== -1) {
        return truncated.substr(0, lastSpaceIndex) + "...";
      }
    }
    return text;
  };

  const [expandedArticles, setExpandedArticles] = useState([]);

  const toggleExpand = (slug) => {
    if (expandedArticles.includes(slug)) {
      setExpandedArticles(expandedArticles.filter((s) => s !== slug));
    } else {
      setExpandedArticles([...expandedArticles, slug]);
    }
  };

  const renderContent = (content) => {
    return content.map((element, index) => {
      if (element.type === "paragraph") {
        return (
          <p key={index} className="text-sm mb-4">
            {element.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text} </span>
            ))}
          </p>
        );
      } else if (element.type === "heading-four") {
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {element.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text} </span>
            ))}
          </h4>
        );
      }
      return null;
    });
  };

  return (
    <>
      <title>Articles</title>
      <div className="flex flex-wrap justify-center">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="article w-1/3 m-4 lg:mx-8 lg:p-4 shadow-xl"
          >
            <div className="p-2">
              <img
                className="rounded-lg"
                src={article.featuredImage.url}
                alt={article.title}
              />
            </div>
            <div className="px-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <div className=" flex items-center font-medium text-gray-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm self-center text-gray-500">
                  {moment(article.createdAt).format("MMM DD, YYYY")}
                </p>
                <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mx-4">
                  <img
                    alt={article.author.name}
                    height="30"
                    width="30"
                    className="align-middle rounded-full"
                    src={article.author.photo.url}
                  />
                  <p className="inline align-middle text-sm text-gray-500 ml-2 font-medium">
                    {article.author.name}
                  </p>
                </div>
              </div>
              {expandedArticles.includes(article.slug) ? (
                renderContent(article.content.raw.children)
              ) : (
                <>
                  {renderContent(article.content.raw.children.slice(0, 1))}
                  {article.content.raw.children.length > 1 && (
                    <button
                      className="text-sm text-blue-500 font-medium"
                      onClick={() => toggleExpand(article.slug)}
                    >
                      Read More
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
