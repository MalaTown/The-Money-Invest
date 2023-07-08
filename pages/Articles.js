/* eslint-disable */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Get_Articles } from "../services";
import moment from "moment";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const fetchedArticles = await Get_Articles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

const renderContent = (content) => {
  const wordLimit = 17; // Number of words to display

  let displayContent = [];
  let wordCount = 0;
  let isTruncated = false;

  for (let i = 0; i < content.length; i++) {
    const element = content[i];

    if (element.type === "paragraph") {
      const words = element.children
        .map((child) => child.text.split(" "))
        .flat();

      if (wordCount + words.length <= wordLimit) {
        // Add entire paragraph if word count is within limit
        displayContent.push(element);
        wordCount += words.length;
      } else {
        // Add partial paragraph to reach word limit
        const remainingWords = wordLimit - wordCount;
        const partialWords = words.slice(0, remainingWords);
        const partialText = partialWords.join(" ");
        const partialElement = {
          type: "paragraph",
          children: [{ text: partialText }],
        };
        displayContent.push(partialElement);
        isTruncated = true;
        break; // Stop processing further paragraphs
      }
    } else if (element.type === "heading-four") {
      displayContent.push(element);
    }
  }

  return (
    <>
      {displayContent.map((element, index) => {
        if (element.type === "paragraph") {
          return (
            <p key={index} className="text-sm mb-4">
              {element.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text} </span>
              ))}
              {isTruncated && " ..."}
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
      })}
    </>
  );
};


  return (
    <>
      <title>Articles</title>
      <div className="flex flex-wrap justify-center">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="article w-5/12 sm:w-2/5 m-2 lg:mx-8 lg:p-4 shadow-xl"
          >
            <div className="p-2">
              <img
                className="rounded-lg w-full h-1/2"
                src={article.featuredImage.url}
                alt={article.title}
              />
            </div>
            <div className="md:px-4 px-2">
              <h3 className="text-sm md:text-lg font-semibold mb-2">
                {article.title}
              </h3>
              <div className="flex items-center font-medium text-gray-700 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2 text-darkblue"
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
              {renderContent(article.content.raw.children)}
              {article.content.raw.children.length > 1 && (
                <Link legacyBehavior href={`/articles/${article.slug}`}>
                <div className="flex justify-center">
                  <a className="text-lg font-semibold border-darkblue border-black rounded-xl px-2 text-darkblue bg-white transition duration-500 hover-bg-darkblue ">
                    Read More
                  </a>
                </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export async function getStaticProps() {
  const Articles = (await Get_Articles()) || [];
  return {
    props: { Articles },
  };
}
