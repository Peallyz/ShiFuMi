import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer1Choice, setPlayer2Choice } from "../features/choice.slice";

const Button = ({ attribute, link, pos, lock }) => {
    const dispatch = useDispatch();
    const pvp = useSelector((state) => state.mode.pvp);
    const hard = useSelector((state) => state.mode.hard);
    const player1 = useSelector((state) => state.player.player1);
    const player2 = useSelector((state) => state.player.player2);

    const computerChoice = () => {
        let attribute;
        let btnClass;
        let link;

        if (hard) {
            const random = Math.floor(Math.random() * 5);
            switch (random) {
                case 0:
                    attribute = "paper";
                    btnClass = "circle paper";
                    link = "icon-paper";
                    break;
                case 1:
                    attribute = "rock";
                    btnClass = "circle rock";
                    link = "icon-rock";

                    break;
                case 2:
                    attribute = "scissors";
                    btnClass = "circle scissors";
                    link = "icon-scissors";

                    break;
                case 3:
                    attribute = "lizard";
                    btnClass = "circle lizard";
                    link = "icon-lizard";

                    break;
                case 4:
                    attribute = "spock";
                    btnClass = "circle spock";
                    link = "icon-spock";

                    break;

                default:
                    break;
            }
        } else if (!hard) {
            const random = Math.floor(Math.random() * 3);
            switch (random) {
                case 0:
                    attribute = "paper";
                    btnClass = "circle paper";
                    link = "icon-paper";
                    break;
                case 1:
                    attribute = "rock";
                    btnClass = "circle rock";
                    link = "icon-rock";

                    break;
                case 2:
                    attribute = "scissors";
                    btnClass = "circle scissors";
                    link = "icon-scissors";

                    break;

                default:
                    break;
            }
        }
        return { attribute, btnClass, link };
    };
    const validateChoice = (attribute, e) => {
        const link = e.target.getAttribute("data-link");
        const btnClass = e.target.getAttribute("class");
        if (player1 === null) {
            if (pvp) {
                dispatch(setPlayer1Choice({ attribute, btnClass, link }));
            } else if (!pvp) {
                dispatch(setPlayer1Choice({ attribute, btnClass, link }));
                dispatch(setPlayer2Choice(computerChoice()));
            }
        } else if (player1 !== null && player2 === null) {
            dispatch(setPlayer2Choice({ attribute, btnClass, link }));
        } else return;
    };
    return (
        <button
            className={
                attribute === "paper"
                    ? pos === "alternative"
                        ? "circle paper alter"
                        : "circle paper"
                    : attribute === "rock"
                    ? pos === "alternative"
                        ? "circle rock alter"
                        : "circle rock"
                    : attribute === "scissors"
                    ? pos === "alternative"
                        ? "circle scissors alter"
                        : "circle scissors"
                    : attribute === "lizard"
                    ? "circle lizard"
                    : attribute === "spock" && "circle spock"
            }
            data-link={link}
            id={lock && "lock"}
            onClick={(e) => validateChoice(attribute, e)}
        >
            <img src={`./assets/images/${link}.svg`} alt={link} />
        </button>
    );
};

export default Button;
