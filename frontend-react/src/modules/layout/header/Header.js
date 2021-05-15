import React from 'react'
import './header.sass'
import searchImg from '../../../assets/img/search.svg';

export const Header = () => {
    return (
        <header
            role="banner"
            className="ml-header-container py-1">
            <nav className="navbar container">
                <a className="navbar-brand mr-2"></a>
                <div className="navbar-search">
                    <form>
                        <input
                            id="nav-search-input"
                            className="nav-search-input"
                            type="search"
                            placeholder="Nunca dejes de buscar"
                            type="text"
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

export default Header