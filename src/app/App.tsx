import React from "react";
import "../css/app.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { HomePage} from "./screens/homePage";
import { ProductsPage } from './screens/productsPage/index';
import { OrdersPage } from './screens/ordersPage/index';
import { UserPage } from './screens/userPage/index';
import { HomeNavbar } from './components/HomeNavbar';
import { OtherNavbar } from './components/OtherNavbar'
import { Footer } from "./components/footer";

 function App() {
  const location =useLocation();
  return (
    <>
    {location.pathname === "/" ?  <HomeNavbar/> : <OtherNavbar/>}
  <Router>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
  </Router>
  <Footer />
  </>
);
}
export default App;







