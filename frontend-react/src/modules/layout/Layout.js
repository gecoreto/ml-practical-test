import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route, Switch
} from "react-router-dom";
import Items from '../items/Items';
import { selectError } from "../items/store/itemsSlice";
import Error from './error/Error';
import Header from './header/Header';

function Layout() {
  const error = useSelector(selectError)
  if (!!error) {
    return (<Router><Error /></Router>)
  }
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/items" />
        )} />
        <Route path="/items">
          <Items />
        </Route>
      </Switch>
    </Router>
  )
}

export default Layout;
