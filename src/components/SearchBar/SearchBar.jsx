import React from 'react';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
    return (
        <div className="SearchBar">
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Search a movie..." />
                </div>
                <div className="control">
                    <a className="button is-info">
                        <FontAwesomeIcon icon="search" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
