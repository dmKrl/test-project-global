import { configureStore } from "@reduxjs/toolkit";
import { backetReducer } from "./slices/backetSlice";

const store = configureStore({
    reducer: {
        backet: backetReducer,
    },
});

export default store;
