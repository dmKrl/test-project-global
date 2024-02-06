/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productBasket: [],
    fullPrice: 0,
};

function addCardForState(state, action) {
    state.productBasket.push(action.payload);
}

function checkProductBasketForRepeatAction(state, action) {
    if (!state.productBasket.length) {
        return addCardForState(state, action);
    }
    if (state.productBasket.length) {
        let checkTrueOrFalse = state.productBasket.some((el) => {
            return el.name === action.payload.name;
        });
        return checkTrueOrFalse ? true : addCardForState(state, action);
    }
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setProductBasket: (state, action) => {
            checkProductBasketForRepeatAction(state, action);
        },
        setFullPrice: (state, action) => {
            state.fullPrice += Number(action.payload);
        },
        clearAllProductBasket: (state) => {
            state.fullPrice = 0;
            state.productBasket = [];
        },
        changePriceWithDeleteChoseCard: (state, action) => {
            state.fullPrice -= action.payload;
        },
        deleteChoseProduct: (state, action) => {
            return {
                ...state,
                productBasket: state.productBasket.filter(
                    (card) => card.name !== action.payload
                ),
            };
        },
    },
});

export const {
    setProductBasket,
    clearAllProductBasket,
    setFullPrice,
    deleteChoseProduct,
    changePriceWithDeleteChoseCard,
} = basketSlice.actions;

export const selectProductBasket = (state) => state.basket.productBasket;
export const selectFullPrice = (state) => state.basket.fullPrice;

export const basketReducer = basketSlice.reducer;
