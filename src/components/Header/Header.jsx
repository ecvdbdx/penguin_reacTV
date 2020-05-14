import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import logo from './../../logo.svg';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from "../../pages/SearchResults";
import HomePage from '../HomePage/HomePage'

export function Header() {
    return (
        <Router>
            <header>
                <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to='/' className="logo">
                            <img src={logo} alt="Logo ReacTV" className="svg-logo"/>
                        </Link>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to='/trending' className="navbar-item">
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
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <SearchBar />
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/trending">
                        <Trending/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/searchresults" component={SearchResults}>
                        <SearchResults />
                    </Route>
                </Switch>
            </header>
        </Router>
    );
}

function Home() {
    return (
      <div className="container">
          <HomePage />
      </div>
    );
}

function Trending() {
    return (
        <div className="container">
            <h2>Trending</h2>
        </div>
    );
}

function About() {
    return (
        <div className="container">
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div className="container">
            <h2>Dashboard</h2>
        </div>
    );
}
