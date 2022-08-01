import { createSlice } from "@reduxjs/toolkit";

export const choiceSlice = createSlice({
    name: "player",
    initialState: {
        player1: null,
        player2: null,
    },
    reducers: {
        setPlayer1Choice: (state, { payload }) => {
            state.player1 = payload;
        },
        setPlayer2Choice: (state, { payload }) => {
            state.player2 = payload;
        },
    },
});

export const { setPlayer1Choice, setPlayer2Choice } = choiceSlice.actions;
export default choiceSlice.reducer;
