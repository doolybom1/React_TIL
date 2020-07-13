import React from 'react';
import { withRouter } from 'react-router-dom';


const WithRouter = ({ location, match, history}) => {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} rows={7} readOnly={true}/>

            <h4>match</h4>
            <textarea value={JSON.stringify(match, null ,2)} rows={7} readOnly={true}/>
            <br/>
            <button onClick={()=>history.push('/')}>홈</button>
        </div>
    );
};

export default withRouter(WithRouter);