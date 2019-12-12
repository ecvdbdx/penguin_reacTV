import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Movie.scss";

export default class Movie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd is-m-3 card" id={this.props.id}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={`https://image.tmdb.org/t/p/w200/${this.props.poster_path}`} alt={this.props.title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title">
                        {this.props.title}
                    </p>
                </div>
                <footer className="card-footer">
                    <Link to="#" className="card-footer-item">Details</Link>
                </footer>
            </div>
        )
    }
}