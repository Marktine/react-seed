import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import Events from './Events/Events';

export default class App extends Component {
    render() {
        return <Router>
        <div>
            <nav className="navbar-youplay navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header"
                    >
                        <button className="navbar-toggle collapsed
                        " data-toggle="off-canvas" data-target="#navbar" aria-expanded="false"
                    aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="events">Events</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
            { /* Body */ }
            <div className="content-wrap">
                {/* Content */}
                <Route exact path="/" component={ Home } />
                <Route path="/events" component={ Events } />
                { /* Footer */ }
                <footer className="youplay-footer">
                    <div className="wrapper">
                        { /* Widgets */ }
                        <div className="widgets">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="side-block">
                                        <div className="block-content">
                                            <img src="assets/images/shooter/logo.png" alt="" />
                                            <br />
                                            <br />
                                            <p>
                                            Somehthing long...
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /* Copyright */ }
                    <div className="copyright">
                        <div className="container">
                            <p>2018 &copy;
                                <strong>nK</strong>. All rights reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </Router>
    }
}