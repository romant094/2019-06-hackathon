import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {Auth, ClosedPage} from '../pages';
import Header from '../header';
import MainService from "../../services";

export default class App extends Component {
    service = new MainService();

    state = {
        isLogged: false
    };

    onLogin = () => {
        const isLogged = localStorage.getItem('isLogged') === 'true';
        this.setState({isLogged: isLogged});
    };

    componentDidMount() {
        this.onLogin();
    }

    logIn = () => {
        const isLogged = this.service.auth(true);
        this.setState({isLogged: isLogged});
    };
    logOut = () => {
        const isLogged = this.service.auth(false);
        this.setState({isLogged: isLogged});
    };

    onAuth = (param) => {
        const isLogged = this.service.auth(param);
        this.setState({isLogged: isLogged});
    };

    render() {
        const {isLogged} = this.state;
        return (
            <>
                <Router>
                    <Header onAuth={this.onAuth} logIn={this.logIn} logOut={this.logOut} isLogged={isLogged}/>
                </Router>
            </>
        );
    }
}