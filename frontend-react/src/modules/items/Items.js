import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    useRouteMatch
} from 'react-router-dom';
import ItemDetail from './item-detail/item-detail';
import Itemlist from './item-list/item-list';
import './items.sass';
import { selectCategories } from './store/itemsSlice';

export const Items = () => {
    let { path } = useRouteMatch();
    const categories = useSelector(selectCategories).map((breadcrumb) => (
        <li key={breadcrumb}>
            <span>{breadcrumb}</span>
        </li >)
    );
    return (
        <Router>
            <div className="items-container container">
                <ul className="breadcrumb">
                    {categories}
                </ul>
                <Route exact path={path} component={Itemlist} />
                <Route path={`${path}/:id`} component={ItemDetail} />
            </div >
        </Router>
    );
}

export default Items