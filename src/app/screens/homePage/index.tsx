import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch ,useSelector} from "react-redux";
import { Dispatch} from "@reduxjs/toolkit";
import { createSelector} from "reselect";
import { setPopularDishes} from "./slice";
import { Product } from '../../lib/types/product';
import { retrievePopularDishes } from "./selector";

/**redux slice & selector */

const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever =createSelector(
        retrievePopularDishes,
        (popularDishes) => ({popularDishes})
);

 export  default function HomePage() {
        const {setPopularDishes} = actionDispatch(useDispatch());
        const {popularDishes} = useSelector(popularDishesRetriever);
        //selector : Store => data

        useEffect(() => {
                //Backend server data request => data
                //slice : data => Store 
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