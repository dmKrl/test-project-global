/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import photo1 from "../../image/TATRAN.png";
import photo2 from "../../image/VILORA.png";
import photo3 from "../../image/MENU.png";
import photo4 from "../../image/AKSETA.png";
import photo5 from "../../image/LUNAR.png";
import photo6 from "../../image/NASTAN.png";
const initialState = {
    images: [
        { image: photo1, id: 1 },
        { image: photo2, id: 2 },
        { image: photo3, id: 3 },
        { image: photo4, id: 4 },
        { image: photo5, id: 5 },
        { image: photo6, id: 6 },
    ],
};

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
});

export const selectImagesCards = (state) => state.images.images;

export const ImagesReducer = imagesSlice.reducer;
