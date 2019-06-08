import React from 'react';
import {Redirect} from 'react-router-dom';

const AuthPage = ({isLoggedIn, onLogIn}) => {

    if (isLoggedIn){
        return (
            <Redirect to={'/'} />
        )
    }
    return (
        <div className="login">
            {/*<Button>*/}

            {/*</Button>*/}
            <button className="btn "
                    onClick={onLogIn}>
                Login
            </button>
        </div>
    )
};

export default AuthPage;