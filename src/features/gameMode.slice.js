import { createSlice } from "@reduxjs/toolkit";

export const gameModeSlice = createSlice({
    name: "mode",
    initialState: {
        hard: false,
        pvp: false,
    },
    reducers: {
        setHardMode: (state, { payload }) => {
            state.hard = payload;
        },
        setPvpMode: (state, { payload }) => {
            state.pvp = payload;
        },
    },
});

export const { setHardMode, setPvpMode } = gameModeSlice.actions;
export default gameModeSlice.reducer;
