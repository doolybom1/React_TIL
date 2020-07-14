import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    border: 1px solid black;

    .thumbnail{
        margin-right: 1rem;
        img{
            display:block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents{
        h2{
            margin:0;
            a{
                color:black;
            }
        }
        p{
            margin:0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({article}) => {
    const { title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            
            {urlToImage && (
                <div className="thumbnail">
                    {/* 
                        Tabnabbing 방지 
                        noopener 속성이 부여된 링크를 통해 열린 페이지는 window.opener를 통해 부모 탭을 참조할 수 없고, location과 같은 자바스크립트 요청을 거부한다
                        noreferrer는 링크를 통해 접근 시 포함된 referrer를 전송하지 않도록 하여 링크를 클릭하더라도 referrer 정보가 유출되지 않는다.

                    */}
                    <a href={url} target="_blank" rel="noopener noreferrer"> 
                       <img src={urlToImage} alt="thumbnail"/> 
                    </a>
                </div>
            )}
        <div className="contents">
            <h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h2>
            <p>{description}</p>
        </div>
        </NewsItemBlock>
    );
};

export default NewsItem;