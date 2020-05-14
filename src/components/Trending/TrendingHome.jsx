import React, {Component} from 'react';
import MovieList from '../MovieList/MovieList'
import globalData from '../../global/variables'
import axios from 'axios'
import './Trending.scss'

export default class TrendingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  
  componentDidMount () {
    this._fetchDatas()
  }
  
  _fetchDatas = () => {
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${globalData.apiKey}&language=fr`;
    
    //console.log(url)
    axios.get(url)
      .then(response => {
        // console.log(response.data.total_pages)
        this.setState({
          movies: response.data.results ? response.data.results : [],
        })
      })
  }
  
  render() {
    return (
      <div className="home-trending home_section">
        <h2 className="home_section">Tendances actuelles</h2>
        
        <MovieList styling_movie="teaser" movies={this.state.movies} />
      </div>
    )
  }
}