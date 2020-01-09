import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import globalData from "../global/variables";
import MovieList from "../components/MovieList/MovieList";
/* FontAwesome imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

class SearchResults extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            listGenres: [],
            searchResults: [],
            /* Filters state */
            filterGenres: null,
            filterResults: null,
        };
    }

    componentDidMount () {
        //fetch datas
        if(this.props.location.state && this.props.location.state.search) {
            this.setState({query: this.props.location.state.search}, () => {
                this._fetchDataSearch(this.state.query)
            })
        }
        this._fetchListGenres()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location.state && this.props.location.state.search !== this.state.query) {
            this.setState({query: this.props.location.state.search}, () => {
                this._fetchDataSearch(this.state.query)
            })
        } else {return null}
    }

    /* ========== Fetching datas ========== */
    _fetchDataSearch = async (query) => {
        let url = '';
        if(this.state.filter_genres && this.state.filter_genres?.length > 0)
            url = `https://api.themoviedb.org/3/search/movie?api_key=${globalData.apiKey}&query=${query}&language=fr&with_genres=${this.state.filter_genres}`;
        else
            url = `https://api.themoviedb.org/3/search/movie?api_key=${globalData.apiKey}&query=${query}&language=fr`;

        //console.log(url)
        axios.get(url)
            .then(response => {
                //console.log(response.data.total_pages)
                this.setState({
                    searchResults: response.data.results ? response.data.results : [],
                    filterResults: null,
                    filterGenres: null,
                })
            })
    }
    _fetchListGenres = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${globalData.apiKey}&language=fr`)
            .then(response => {
                this.setState({
                    listGenres: response.data.genres || []
                })
            })
    }

    /* ========== events ========== */
    _onChangeFilter = (initial, data) => {
        if(data === 'null') {
            this.setState({filterResults: this.state.searchResults, filterGenres: null})
            return null;
        }

        const newResults = this.state.searchResults.filter(film => film.genre_ids?.includes(parseInt(data)))
        this.setState({filterResults: newResults, filterGenres: newResults})
    }
    _onChangeStars = (data) => {
        const stars = data?.split('_')?.[1];

        if(stars === 'all' && (this.state.filterGenres && this.state.filterGenres?.length > 0)) {
            this.setState({filterResults: this.state.filterGenres})
            return null;
        } else if(stars === 'all') {
            this.setState({filterResults: this.state.searchResults})
            return null;
        }

        let newResults;
        if(this.state.filterGenres && this.state.filterGenres?.length > 0) {
            console.log(this.state.filterGenres)
            newResults = this.state.filterGenres.filter(film => ((film.vote_average) <= parseInt(stars)) && ((film.vote_average) >= parseInt(stars)-2) )
        }
        else
            newResults = this.state.searchResults.filter(film => ((film.vote_average) <= parseInt(stars)) && ((film.vote_average) >= parseInt(stars)-2) )

        console.log(parseInt(stars), parseInt(stars)-2)

        this.setState({filterResults: newResults})
    }

    render(){
        const {searchResults, filterResults, query, listGenres} = this.state;

        if(query !== '') {
            if(searchResults.length !== 0) {
                return (
                    <div className="container">
                        <h1 className='title'>Résultats de recherche</h1>
                        <h2 className='subtitle'><i>Résultats pour la recherche : {query}</i></h2>

                        <div className="filterBar">
                            <p>Filtrer les résultats:</p>
                            <div className="listGenres select">
                                <select name="sort_genres" id="sort_genres" onChange={(e) => this._onChangeFilter(listGenres, e.target.value) }>
                                    <option value="null">Choisir un genre</option>
                                    {listGenres.map(genres =>
                                        <option value={genres.id} key={genres.id}>{genres.name}</option>
                                    )}
                                </select>
                            </div>
                            <br/><br/>
                            <div className="listNote">
                                <p>Note moyenne:</p>
                                <div className="control">
                                    <p>
                                        <label className="radio"><input type="radio" name="filterStars" value="stars_all" onChange={(e) => this._onChangeStars(e.target.value) } /> Toutes les notes</label>
                                    </p>
                                    <p>
                                        <label className="radio"><input type="radio" name="filterStars" value="stars_8" onChange={(e) => this._onChangeStars(e.target.value) } />
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className="radio"><input type="radio" name="filterStars" value="stars_7" onChange={(e) => this._onChangeStars(e.target.value) } />
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className="radio"><input type="radio" name="filterStars" value="stars_6" onChange={(e) => this._onChangeStars(e.target.value) } />
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className="radio"><input type="radio" name="filterStars" value="stars_5" onChange={(e) => this._onChangeStars(e.target.value) } />
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className="radio"><input type="radio" name="filterStars" value="stars_3" onChange={(e) => this._onChangeStars(e.target.value) } />
                                            <span className="icon has-text-warning"><FontAwesomeIcon icon={faStar}/></span>
                                        </label>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="columns is-multiline">
                            {!filterResults ?
                                <MovieList movies={ searchResults } />
                                :
                                filterResults.length > 0 ?
                                    <MovieList movies={ filterResults } />
                                    :
                                    <div className="container">
                                        <h2 className='title'>Aucun résultat trouvé avec vos filtres...</h2>
                                    </div>

                            }
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="container">
                        <h2 className='title'>Aucun résultat trouvé pour votre recherche "{query}"</h2>
                    </div>
                )
            }
        } else {
            return (
                <div className="container">
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="title">Oops, petit problème.</p>
                            <p className="subtitle">Vous voyez le soucis ?</p>
                            <div className="content">
                                Essayez de saisir quelque chose dans la recherche... ;)
                            </div>
                        </article>
                    </div>
                </div>
            )
        }

    }
}

export default withRouter(SearchResults);