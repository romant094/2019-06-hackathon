import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Auth, ClosedPage} from '../pages'

export default class App extends Component {
    state = {
        isLoggedIn: false
    };
    onLogin = () => {
        this.setState({isLoggedIn: true});
        console.log('I logged in!')
    };

    render() {
        const {isLoggedIn} = this.state;
        return (
            <div>
                <header>
                    Container
                </header>
                <Router>
                    <div>
                        <Link to={'/'}>Start page</Link>
                        <Link to={'/opened'}>Opened page</Link>
                        <Link to={'/closed'}>Closed page</Link>
                        {/*<Link to={'/login'}>login</Link>*/}
                    </div>

                    <div>
                        <Route path={'/'} exact
                               render={() => (
                                   <h2>Welcome! <br/>
                                       This is a simple example of auth
                                   </h2>
                               )}/>

                        <Route path={'/opened'}
                               render={() => (
                                   <h2>opened content</h2>
                               )}/>

                        <Route path={'/closed'}
                               render={() => (
                                   <ClosedPage isLoggedIn={isLoggedIn}/>
                               )}/>

                        <Route path={'/login'}
                               render={() => (
                                   <Auth isLoggedIn={isLoggedIn}
                                         onLogIn={this.onLogin}/>
                               )}/>
                    </div>
                </Router>

            </div>
        );
    }
}