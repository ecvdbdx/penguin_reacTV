import React, {Component} from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link, withRouter} from 'react-router-dom';


class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    render() {
        return (
            <div className="SearchBar">
                <form>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" value={this.state.query} type="text" placeholder="Search a movie..."
                                   onChange={(event) => this.setState({query: event.target.value})}
                            />
                        </div>
                        <div className="control">
                            {this.state.query !== "" ? (
                                <Link onKeyPress={() => console.log('press !')}
                                    to={{pathname: '/searchresults', state: {search: this.state.query } }} >
                                    <input type='submit' value='' className="hideElement" />
                                    <button className="button is-info">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </Link>
                                ) : (
                                /* Display message to inform field can't be null (cf Bulma notifications) */
                                <button className="button is-info">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                                )
                            }
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(SearchBar)