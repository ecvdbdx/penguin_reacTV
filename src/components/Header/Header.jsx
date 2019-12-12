import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './../../logo.svg';
import MovieList from "../MovieList/MovieList";

export function Header() {
    return (
        <Router>
            <header>
                <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <img src={logo} alt="Logo ReacTV" class="svg-logo"/>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to='/' className="navbar-item">
                                Trending
                            </Link>
                            <Link to='/about' className="navbar-item">
                                About
                            </Link>
                            <Link to='/dashboard' className="navbar-item">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Trending/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <MovieList/>
                    </Route>
                </Switch>
            </header>
            < /Router>
                ); }

                function Trending() {
                return (
                <div>
                <h2>Trending</h2>
                </div>
                );
            }

                function About() {
                return (
                <div>
                <h2>About</h2>
                </div>
                );
            }

                function Dashboard() {
                return (
                <div>
                <h2>Dashboard</h2>
                </div>
                );
            }
