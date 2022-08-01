import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer1Choice, setPlayer2Choice } from "../features/choice.slice";
import { setScore } from "../features/score.slice";
import Button from "./Button";

const Game = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.hard);
    const player1 = useSelector((state) => state.player.player1);
    const player2 = useSelector((state) => state.player.player2);
    const previousScore = useSelector((state) => state.score.score);
    const game = document.querySelector(".game");
    const [btnLock, setBtnLock] = useState(false);
    const [result, setResult] = useState();

    if (player2 && player1) {
        setTimeout(() => {
            game.classList.add("disabled");
            setBtnLock(true);
        }, 800);
    }

    const playAgain = () => {
        game.classList.remove("disabled");
        dispatch(setPlayer1Choice(null));
        dispatch(setPlayer2Choice(null));
        setBtnLock(false);
        setResult();
    };

    useEffect(() => {
        const addScore = () => {
            if (result === 1) {
                dispatch(setScore(previousScore + 1));
            }
        };
        const checkWin = () => {
            let result;

            if (player1.attribute === "paper") {
                switch (player2.attribute) {
                    case "rock":
                    case "spock":
                        result = 1;
                        break;
                    case "paper":
                        result = 0;
                        break;
                    case "scissors":
                    case "lizard":
                        result = -1;
                        break;
                    default:
                        break;
                }
            } else if (player1.attribute === "rock") {
                switch (player2.attribute) {
                    case "scissors":
                    case "lizard":
                        result = 1;
                        break;
                    case "rock":
                        result = 0;
                        break;
                    case "paper":
                    case "spock":
                        result = -1;
                        break;
                    default:
                        break;
                }
            } else if (player1.attribute === "scissors") {
                switch (player2.attribute) {
                    case "paper":
                    case "lizard":
                        result = 1;
                        break;
                    case "scissors":
                        result = 0;
                        break;
                    case "rock":
                    case "spock":
                        result = -1;
                        break;
                    default:
                        break;
                }
            } else if (player1.attribute === "lizard") {
                switch (player2.attribute) {
                    case "paper":
                    case "spock":
                        result = 1;
                        break;
                    case "lizard":
                        result = 0;
                        break;
                    case "rock":
                    case "scissors":
                        result = -1;
                        break;
                    default:
                        break;
                }
            } else if (player1.attribute === "spock") {
                switch (player2.attribute) {
                    case "scissors":
                    case "rock":
                        result = 1;
                        break;
                    case "spock":
                        result = 0;
                        break;
                    case "paper":
                    case "lizard":
                        result = -1;
                        break;
                    default:
                        break;
                }
            }
            addScore();
            return result;
        };
        if (player1 && player2) {
            setResult(checkWin());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, player1, player2, result]);

    return (
        <div className="main">
            <div className={player2 && player1 ? "game onfight" : "game"}>
                <img
                    src={
                        mode
                            ? "./assets/images/bg-pentagon.svg"
                            : "./assets/images/bg-triangle.svg"
                    }
                    alt=""
                />
                <Button
                    attribute={"paper"}
                    link={"icon-paper"}
                    pos={mode && "alternative"}
                />
                <Button
                    attribute={"rock"}
                    link={"icon-rock"}
                    pos={mode && "alternative"}
                />
                <Button
                    attribute={"scissors"}
                    link={"icon-scissors"}
                    pos={mode && "alternative"}
                />
                {mode && <Button attribute={"lizard"} link={"icon-lizard"} />}
                {mode && <Button attribute={"spock"} link={"icon-spock"} />}
            </div>
            {btnLock && (
                <div className="scoreScreen">
                    <div className="player1">
                        <h3>You Picked</h3>
                        <Button
                            attribute={player1.attribute}
                            link={player1.link}
                            lock={true}
                        />
                    </div>
                    <div className="results">
                        <h3>
                            {result === 1
                                ? "You win"
                                : result === 0
                                ? "Draw"
                                : result === -1 && "You lose"}
                        </h3>
                        <button onClick={() => playAgain()}>Play again</button>
                    </div>
                    <div className="player2">
                        <h3>The house picked</h3>
                        <Button
                            attribute={player2.attribute}
                            link={player2.link}
                            lock={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;
