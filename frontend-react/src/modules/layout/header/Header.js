import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import searchImg from '../../../assets/img/search.svg';
import './header.sass';

export const Header = () => {
    const [search, setSearch] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        let queryString = "search=" + search;
        history.replace(`/items?${queryString}`);
        history.go()
        e.preventDefault();
    }
    return (
        <header
            role="banner"
            className="ml-header-container py-1">
            <nav className="navbar container">
                <Link to="/" className="navbar-brand mr-2" />
                <div className="navbar-search">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            id="nav-search-input"
                            className="nav-search-input"
                            placeholder="Nunca dejes de buscar"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="Search" />
                        <button
                            className="nav-search-btn"
                            type="submit">
                            <img
                                src={searchImg}
                                alt="buscar" />
                        </button>
                    </form>
                </div>
            </nav>
        </header >
    );
}

export default withRouter(Header)