import { configureStore } from "@reduxjs/toolkit";
import agifySlice from "./agify-slice";
import genderSlice from './gender-slice';
import genderlistSlice from "./genderlist-slice";
import nationalizeSlice from "./nationalize-slice";


const store = configureStore({
    reducer: {
        gender: genderSlice.reducer,
        genderlist: genderlistSlice.reducer,
        nationality: nationalizeSlice.reducer,
        nationality: agifySlice.reducer,
    }
});

export default store;