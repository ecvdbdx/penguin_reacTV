import React, {Component} from 'react';
import Movie from './../Movie/Movie.jsx';

export default class MovieList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const list = this.props.movies.map((movie, id) => <Movie {...movie} key={id}/>);
        return (
            <div className="container">
                <div className="columns is-multiline">
                    {list}
                </div>
            </div>
        )
    }
}