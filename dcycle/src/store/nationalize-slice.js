import { createSlice } from "@reduxjs/toolkit";

const nationalizeSlice = createSlice({
    name: "nationality",
    initialState: {
        data: { name: "", country:[{country_id: "", probability:""}]},
        },
        reducers: {
            clear(state, action) {
                state.data.name = "";
                state.data.country = "";
                state.data.country_id = "";
                state.data.probability = "";
            },
            setNationality(state, action) {
                state.data.name = action.payload.name;
                state.data.country = action.payload.country;
                state.data.country_id = action.payload.country_id;
                state.data.probability = action.payload.probability;
            },
        },
    });

    export const nationalityActions = nationalizeSlice.actions;

    export default nationalizeSlice;