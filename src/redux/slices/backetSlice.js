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
            console.log(action.payload);
            state.fullPrice += Number(action.payload);
        },
        clearAllProductBacket: (state) => {
            state.fullPrice = 0;
            state.productBacket = [];
        },
        deleteChoseProduct: (state, action) => {
            return {
                ...state,
                productBacket: state.productBacket.filter(
                    (card) => card.name !== action.payload
                ),
            };
        },
    },
});

export const {
    setProductBacket,
    clearAllProductBacket,
    setFullPrice,
    deleteChoseProduct,
} = backetSlice.actions;

export const selectProductBacket = (state) => state.backet.productBacket;
export const selectFullPrice = (state) => state.backet.fullPrice;

export const backetReducer = backetSlice.reducer;
