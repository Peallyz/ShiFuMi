import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
    name: "score",
    initialState: {
        score: 0,
    },
    reducers: {
        setScore: (state, { payload }) => {
            state.score = payload;
        },
    },
});

export const { setScore } = scoreSlice.actions;
export default scoreSlice.reducer;
