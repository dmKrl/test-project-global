/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowingPopup: false,
};

const PopupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        setIsShowingPopup: (state) => {
            state.isShowingPopup = !state.isShowingPopup;
        },
    },
});

export const { setIsShowingPopup } = PopupSlice.actions;

export const selectIsShowingPopup = (state) => state.popup.isShowingPopup;

export const PopupReducer = PopupSlice.reducer;
