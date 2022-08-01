import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        open: false,
    },
    reducers: {
        setModalOpen: (state, { payload }) => {
            state.open = payload;
        },
    },
});

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
