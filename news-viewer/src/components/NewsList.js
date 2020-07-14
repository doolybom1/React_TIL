import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';

const NewsListBlock = styled.div`
    
    box-sizing: border-box;
    padding-bottom: 3rem;
    width:768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }  
`;

/*
const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
}
*/

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=1e43a1d6392448a1a67e84a42e08bcfe'
                );
                setArticles(response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();    
    },[]);

    if(loading){
        return <NewsListBlock>대기중 ..</NewsListBlock>;
    }

    if(!articles){
        return null;
    }

    return (
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem key={article.url} article={article}></NewsItem>
        ))}
        
      </NewsListBlock>
    );
};

export default NewsList;