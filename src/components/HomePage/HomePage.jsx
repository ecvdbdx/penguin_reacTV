import React, {Component} from 'react';
import TrendingHome from '../Trending/TrendingHome'
import './HomePage.scss'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  
  componentDidMount () {
  }
  
  render() {
    return (
      <div className="container">
        <TrendingHome />
      </div>
    )
  }
}