import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemDetail from './item-detail/item-detail';
import Itemlist from './item-list/item-list';
import './items.sass'

export const Items = () => {
    return (
        <Router>
            <div className="items-container container">
                <ul className="breadcrumb">
                    <li >
                        <span>1</span>
                    </li>
                    <li >
                        <span>2</span>
                    </li>
                </ul>
                <Route exact path="/" component={Itemlist} />
                <Route path="/items/*" component={ItemDetail} />
            </div >
        </Router>
    )
}

export default Items