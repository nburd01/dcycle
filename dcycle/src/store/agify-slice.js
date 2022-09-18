import { createSlice } from "@reduxjs/toolkit";

const agifySlice = createSlice({
    name: "age",
    initialState: {
        data: { name: "", age: "", count: ""},
        },
        reducers: {
            clear(state, action) {
                state.data.name = "";
                state.data.age = "";
                state.data.count = "";
            },
            setAge(state, action) {
                state.data.name = action.payload.name;
                state.data.age = action.payload.age;
                state.data.count = action.payload.count;
            },
        },
    });

    export const ageActions = agifySlice.actions;

    export default agifySlice;