import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true   // 이 설정을 통해 문자열 맨 앞의 ? 생략가능
    });
    const showDetail = query.detail === 'false'; // 쿼리의 파싱 결과 값은 문자열

    return (
        <div>
           <h1>소개</h1> 
           <p>소개 페이지 입니다.</p>
           {showDetail && <p>detail 값을 false로 설정</p>}
        </div>
    );
};

export default About;