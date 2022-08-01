import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal.slice";
import gameModeReducer from "../features/gameMode.slice";
import choiceReducer from "../features/choice.slice";
import scoreReducer from "../features/score.slice";

export default configureStore({
    reducer: {
        modal: modalReducer,
        mode: gameModeReducer,
        player: choiceReducer,
        score: scoreReducer,
    },
});
