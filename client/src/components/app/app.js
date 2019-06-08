import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from '../header';
import MainService from "../../services";
import Main from '../main';

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

    onAuth = (param) => {
        const isLogged = this.service.auth(param);
        this.setState({isLogged: isLogged});
    };

    render() {
        const {isLogged} = this.state;
        return (
            <>
                <Router>
                    <Header onAuth={this.onAuth}
                            isLogged={isLogged}/>
                    <Main/>
                </Router>
            </>
        );
    }
}