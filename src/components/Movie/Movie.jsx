import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./Movie.scss";
import globalData from "../../global/variables";

export default class Movie extends Component {
    render() {
      return (
        <>
          {this.props?.movie_display && this.props.movie_display == "teaser" ?
            <div
              className={"teaser "+this.props.className}
              id={this.props.id}
              note={this.props.vote_average}>
                  <Link to="#" className="">
                    {this.props.poster_path ?
                      <img className="poster-teaser" src={`${globalData.imgSrc}${this.props.poster_path}`} alt={this.props.title} />
                      :
                      <img className="poster-teaser" src='https://via.placeholder.com/200x300' alt={this.props.title}/>
                    }
                  </Link>
            </div>
            :
            <div
              className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd is-m-3 card"
              id={this.props.id}
              note={this.props.vote_average}>
              <div className="card-image">
                <figure className="image is-4by3">
                  {this.props.poster_path ?
                    <img className="img-card" src={`${globalData.imgSrc}${this.props.poster_path}`} alt={this.props.title} />
                    :
                    <img className="img-card" src='https://via.placeholder.com/200x300' alt={this.props.title}/>
                  }
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
            }
        </>
      )
    }
}