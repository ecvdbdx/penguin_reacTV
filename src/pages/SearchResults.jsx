import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import globalData from "../global/variables";

class SearchResults extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            searchResults: []
        };
    }

    componentDidMount () {
        //fetch datas
        if(this.props.location.state && this.props.location.state.search) {
            this.setState({query: this.props.location.state.search}, () => {
                this._fetchDataSearch(this.state.query)
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location.state.search !== this.state.query) {
            this.setState({query: this.props.location.state.search}, () => {
                this._fetchDataSearch(this.state.query)
            })
        } else {return}
    }

    _fetchDataSearch = async (query) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${globalData.apiKey}&query=${query}&language=fr`)
            .then(response => {
                this.setState({searchResults: response.data.results ? response.data.results : []})
                //console.log(this.state.searchResults)
            })
    }

    render(){
        const {searchResults} = this.state
        return (
            <div className="container">
                <h1>Results Page</h1>
                {searchResults.map((movie) => {
                    console.log(movie)
                    return (
                        // Next, we have to return <Movie /> component with needed props
                        <div key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""/>
                            <h2>{movie.title}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withRouter(SearchResults);