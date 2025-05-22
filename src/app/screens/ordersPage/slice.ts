import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../lib/types/screen";


const initialState: OrdersPageState = {
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],
};

const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {
        setPausedOrders(state, action) {
            state.pausedOrders = action.payload;
        },
        setProcessOrders(state, action) {
            state.pausedOrders = action.payload;
        },
      setFinishedOrders(state, action) {
            state.finishedOrders = action.payload;
        },
    },
});
export const { setPausedOrders,setFinishedOrders ,setProcessOrders} = ordersPageSlice.actions;
    
const ordersPageReducer = ordersPageSlice.reducer;
export default ordersPageReducer;