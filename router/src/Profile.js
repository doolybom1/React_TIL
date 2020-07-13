import React from 'react';
import WithRouter from './WithRouter';

const data = {
    velopert: {
        name : '김민준',
        description: '리액트 개발자'
    },
    gildong:{
        name : '홍길동',
        description: '홍길동전 주인공'
    }
}

const Profile = ({match}) => {
    const { user} = match.params;
    const profile = data[user];
    
    if(!profile){
        return <div>존재하지 않는 사용자입니다</div>
    }
    return (
        <div>
            <h3>
                {user}({profile.name})    
            </h3>        
        <p>{profile.description}</p>
        <WithRouter />
        </div>
    );
};

export default Profile;