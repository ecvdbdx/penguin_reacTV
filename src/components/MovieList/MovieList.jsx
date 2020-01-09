import React, { Component } from 'react';
import Movie from './../Movie/Movie.jsx';
import './MovieList.scss';

export default class MovieList extends Component {
    render() {
        if(!this.props.movies)
            return null;

        return (
            <div className="container">
                <div className="columns is-multiline">
                    {this.props.movies.map((movie, id) =>
                        <Movie {...movie} key={id}/>
                    )}
                </div>
            </div>
        )
    }
}