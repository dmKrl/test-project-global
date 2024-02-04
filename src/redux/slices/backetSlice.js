/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productBacket: [],
    fullPrice: 0,
};

const backetSlice = createSlice({
    name: "backet",
    initialState,
    reducers: {
        setProductBacket: (state, action) => {
            state.productBacket.includes(action.payload)
                ? ""
                : state.productBacket.push(action.payload);
        },
        setFullPrice: (state, action) => {
            state.fullPrice += Number(action.payload);
        },
        setProductBacket: (state, action) => {
            state.productBacket.includes(action.payload)
                ? ""
                : state.productBacket.push(action.payload);
        },
        clearAllProductBacket: (state) => {
            state.fullPrice = 0;
            state.productBacket = [];
        },
    },
});

export const { setProductBacket, clearAllProductBacket, setFullPrice } =
    backetSlice.actions;

export const selectProductBacket = (state) => state.backet.productBacket;
export const selectFullPrice = (state) => state.backet.fullPrice;

export const backetReducer = backetSlice.reducer;
