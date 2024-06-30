
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=doctor&apiKey=1d3a0eefa97b499d8fbc4ee93eeb40b7`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container_news">
      <h2>Doctor News</h2>
      {articles.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <div className="grid_news">
          {articles.map((article, index) => (
            <div key={index} className="card_news">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.urlToImage && (
                  <img src={article.urlToImage} alt={article.title} className="image_news" />
                )}
                <div className="content_news">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;

