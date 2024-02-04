/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productBacket: [],
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
    },
});

export const { setProductBacket } = backetSlice.actions;

export const selectProductBacket = (state) => state.backet.productBacket;

export const backetReducer = backetSlice.reducer;
