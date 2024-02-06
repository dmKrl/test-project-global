import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "../redux/slices/basketSlice";
import { PopupReducer } from "../redux/slices/popupSlice";

const store = configureStore({
    reducer: {
        basket: basketReducer,
        popup: PopupReducer,
    },
});

export default store;
