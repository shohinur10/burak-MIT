import React from "react";
import "../css/app.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage} from "./screens/homePage";
import { ProductsPage } from './screens/productsPage/index';
import { OrdersPage } from './screens/ordersPage/index';
import { UserPage } from './screens/userPage/index';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
          <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
            <Route path="/member-page">
          <UserPage />
          </Route>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}








