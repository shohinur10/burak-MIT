import React,{useState}from "react";
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
import { CartItem } from "./lib/types/search";



 function App() {
  const location =useLocation();

  const cartJson:string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [ cartItems, setCartItem] =useState<CartItem[]>(currentCart);


  /** Handlers */
  const onAdd =(input: CartItem) => {
    const exist:any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === exist._id 
      ? { ...exist, quantity: exist.quantity + 1 } 
      : item
      );
      setCartItem(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate)); //  biz localstorage cartDate deb nomlangan qiymatimiz 
    } else {
      const cartUpdate = [...cartItems, { ...input}];
      setCartItem(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }
  };
    
  return (
    <>
    {location.pathname === "/" ?  <HomeNavbar cartItems={cartItems}/> : <OtherNavbar
    cartItems={cartItems}/>}
    <Switch>
        {/** checks the path and directs us to the related page */}
        <Route path="/products">
          <ProductsPage onAdd= {onAdd}/>
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


