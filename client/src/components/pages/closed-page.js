import React from 'react';
import {Redirect} from 'react-router-dom';

const ClosedPage = ({isLogged}) => {
    if (isLogged) {
        return (
            <h2>The <span className="text-color--green">closed</span> content is now opened...</h2>
        )

    }
    return (
        <Redirect to={'/login'}/>
    )
};

export default ClosedPage;