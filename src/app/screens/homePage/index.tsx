import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../lib/types/member";
import { AppDispatch } from "../../store"; // ✅ ensure this import
import "../../../css/home.css";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const product = new ProductService();

    // 🔥 Popular Dishes
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews", // ✅ Use correct value your API expects
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => dispatch(setPopularDishes(data)))
      .catch((err) => console.log("Popular dishes error:", err));

    // 🔥 New Dishes
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt", // ✅ Adjust based on backend needs
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => dispatch(setNewDishes(data)))
      .catch((err) => console.log("New dishes error:", err));

    // 🔥 Top Users
    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => dispatch(setTopUsers(data)))
      .catch((err) => console.log("Top users error:", err));
  }, [dispatch]);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}

