/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';
import Image from 'next/image';

const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0902f213564948d4bce83d2c6998e57f',
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log('news', news);

  return (
    <div className="App">
      {news
        && news.map((item, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: '70%' }}
            cover={<Image alt="image" src={item.urlToImage} />}
          >
            <Meta title={item.title} description={item.content} />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Button type="primary" style={{ marginTop: '10px' }}>
                Read More
              </Button>
            </a>
          </Card>
        ))}
    </div>
  );
}

export default News;
