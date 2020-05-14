import React, {Component} from 'react';
import MovieList from '../MovieList/MovieList'
import globalData from '../../global/variables'
import axios from 'axios'

export default class Trending extends Component {
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
      <div className="container">
        <h2>HomePage</h2>
        
        <MovieList styling_movie="full" movies={this.state.movies} />
      </div>
    )
  }
}