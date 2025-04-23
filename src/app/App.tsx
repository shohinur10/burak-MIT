import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import  HomePage from "./screens/homePage";
import  ProductsPage  from './screens/productsPage/index';
import  OrdersPage  from './screens/ordersPage/index';
import  UserPage  from './screens/userPage/index';
import  HomeNavbar from './components/headers/HomeNavbar';
import  OtherNavbar from './components/headers/OtherNavbar'
import  Footer  from "./components/footer";
import  HelpPage  from "./screens/helpPage";
import "../css/navbar.css";
import "../css/app.css";
import "../css/footer.css";



 function App() {
  const location =useLocation();
  return (
    <>
    {location.pathname === "/" ?  <HomeNavbar/> : <OtherNavbar/>}
    <Switch>
        {/** checks the path and directs us to the related page */}
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          {" "}
          {/** route / must be put at the end to provide correct switching */}
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;







