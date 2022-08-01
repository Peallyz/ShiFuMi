import React, { useEffect } from "react";
import { setModalOpen } from "../features/modal.slice";
import { useDispatch, useSelector } from "react-redux";

const ModalRules = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.hard);

    useEffect(() => {
        const closeModal = (e) => {
            if (e.target.getAttribute("class") === "modal") {
                dispatch(setModalOpen(false));
            }
        };

        window.addEventListener("click", closeModal);

        return function () {
            window.removeEventListener("click", closeModal);
        };
    }, [dispatch]);
    return (
        <div className="modal">
            <div className="box">
                <div className="title">
                    <p>Rules</p>
                    <img
                        src="./assets/images/icon-close.svg"
                        alt="close icon"
                        onClick={() => dispatch(setModalOpen(false))}
                    />
                </div>
                <img
                    src={
                        mode
                            ? "./assets/images/image-rules-bonus.svg"
                            : "./assets/images/image-rules.svg"
                    }
                    alt="rules diagram"
                    className="diagram"
                />
            </div>
        </div>
    );
};

export default ModalRules;
