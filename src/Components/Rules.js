import React from "react";
import ModalRules from "./ModalRules";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../features/modal.slice";
import { setHardMode, setPvpMode } from "../features/gameMode.slice";

const Rules = () => {
    const dispatch = useDispatch();
    const openModal = useSelector((state) => state.modal.open);
    const hardMode = useSelector((state) => state.mode.hard);
    const pvpMode = useSelector((state) => state.mode.pvp);

    return (
        <div className="rules_box">
            <label htmlFor="hardMode">
                <span className="txt">Hardmode</span>
                <input
                    type="checkbox"
                    name="hardMode"
                    id="hardMode"
                    onClick={() => dispatch(setHardMode(!hardMode))}
                />
                <span className="slider"></span>
            </label>
            <label htmlFor="pvp" className="pvp">
                <span className="txt">PvP</span>
                <input
                    type="checkbox"
                    name="pvp"
                    id="pvp"
                    onClick={() => dispatch(setPvpMode(!pvpMode))}
                />
                <span className="slider"></span>
            </label>
            <button
                className="rules"
                onClick={() => dispatch(setModalOpen(true))}
            >
                Rules
            </button>
            {openModal && <ModalRules />}
        </div>
    );
};

export default Rules;
