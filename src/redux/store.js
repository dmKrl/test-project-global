import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "../redux/slices/basketSlice";
import { PopupReducer } from "../redux/slices/popupSlice";
import { ImagesReducer } from "./slices/imagesSlice";

const store = configureStore({
    reducer: {
        basket: basketReducer,
        popup: PopupReducer,
        images: ImagesReducer,
    },
});

export default store;
