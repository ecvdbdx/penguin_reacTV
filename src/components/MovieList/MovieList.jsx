import React, { Component } from 'react';
import Movie from './../Movie/Movie.jsx';
import './MovieList.scss';
import bulmaCarousel from 'bulma-carousel/src/js'

export default class MovieList extends Component {
    componentDidMount () {
      setTimeout(() => {
        let carousels = bulmaCarousel.attach('.carousel-movielist', {
          slidesToScroll: 2,
          slidesToShow: 6,
          pagination: false
        });
      }, 500)
    }
  
    render() {
      if(!this.props.movies)
          return null;
  
      return (
        <>
          {this.props?.styling_movie && this.props.styling_movie == "teaser" ?
            <div className="">
              <div className='carousel-movielist carousel'>
                {this.props.movies.map((movie, id) =>
                  <Movie className={"item-"+id} movie_display={this.props?.styling_movie ? this.props.styling_movie : "full"} {...movie} key={id}/>
                )}
              </div>
            </div>
            :
            <div className="columns is-multiline">
              {this.props.movies.map((movie, id) =>
                <Movie movie_display={this.props?.styling_movie ? this.props.styling_movie : "full"} {...movie} key={id}/>
              )}
            </div>
          }
        </>
      )
    }
}