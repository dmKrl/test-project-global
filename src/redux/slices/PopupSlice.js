/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowingPopup: false,
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        setIsShowingPopup: (state) => {
            state.isShowingPopup = !state.isShowingPopup;
        },
    },
});

export const { setIsShowingPopup } = popupSlice.actions;

export const selectIsShowingPopup = (state) => state.popup.isShowingPopup;

export const PopupReducer = popupSlice.reducer;
