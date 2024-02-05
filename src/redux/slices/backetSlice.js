/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productBacket: [],
    fullPrice: 0,
};

function addCardForState(state, action) {
    state.productBacket.push(action.payload);
}

function checkProductBacketForRepeatAction(state, action) {
    if (!state.productBacket.length) {
        return addCardForState(state, action);
    }
    if (state.productBacket.length) {
        let checkTrueOrFalse = state.productBacket.some((el) => {
            return el.name === action.payload.name;
        });
        return checkTrueOrFalse ? true : addCardForState(state, action);
    }
}

const backetSlice = createSlice({
    name: "backet",
    initialState,
    reducers: {
        setProductBacket: (state, action) => {
            checkProductBacketForRepeatAction(state, action);
        },
        setFullPrice: (state, action) => {
            state.fullPrice += Number(action.payload);
        },
        clearAllProductBacket: (state) => {
            state.fullPrice = 0;
            state.productBacket = [];
        },
        changePriceWithDeleteChoseCard: (state, action) => {
            state.fullPrice -= action.payload;
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
    changePriceWithDeleteChoseCard,
} = backetSlice.actions;

export const selectProductBacket = (state) => state.backet.productBacket;
export const selectFullPrice = (state) => state.backet.fullPrice;

export const backetReducer = backetSlice.reducer;
