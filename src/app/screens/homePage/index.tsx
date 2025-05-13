/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch} from "@reduxjs/toolkit";
import { setPopularDishes} from "./slice";
import { Product } from '../../lib/types/product';
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";

/**Redux slice & selector */

const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

 export  default function HomePage() {
        const {setPopularDishes} = actionDispatch(useDispatch());
        //selector : Store => data

        useEffect(() => {
                //Backend server data request => data
                //slice : data => Store 
                //Backend server data  fetch => Data
            
                const product = new ProductService();
                product.getProducts({
                        page: 1,
                        limit: 4,
                        order: "productViews",
                        productCollection: ProductCollection.DISH,
                        search: ""
                })
                .then((data) =>{
                        console.log("data Passed  here:", data);
                        setPopularDishes(data);
                })
                .catch((err) => console.log(err));
        }, []);

    return ( 
    <div className={"homepage"}>
            <Statistics/>
            <PopularDishes/>
            <NewDishes/>
            <Advertisement/>
            <ActiveUsers/>
            <Events/>

    </div>
    );
  }