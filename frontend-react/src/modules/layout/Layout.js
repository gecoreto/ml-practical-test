import {
  BrowserRouter as Router,
  Redirect,
  Route, Switch
} from "react-router-dom";
import Items from '../items/Items';
import Header from './header/Header';

function Layout() {
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
