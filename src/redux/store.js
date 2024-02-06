import { configureStore } from "@reduxjs/toolkit";
import { backetReducer } from "./slices/backetSlice";
import { PopupReducer } from "./slices/popupSlice";

const store = configureStore({
    reducer: {
        backet: backetReducer,
        popup: PopupReducer,
    },
});

export default store;
