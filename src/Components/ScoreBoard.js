import React from "react";
import { useSelector } from "react-redux";

const ScoreBoard = () => {
    const mode = useSelector((state) => state.mode.hard);
    const score = useSelector((state) => state.score.score);

    return (
        <header>
            <img
                src={
                    mode
                        ? "./assets/images/logo-bonus.svg"
                        : "./assets/images/logo.svg"
                }
                alt="logo"
            />
            <div className="score">
                <p>score</p>
                <span>{score}</span>
            </div>
        </header>
    );
};

export default ScoreBoard;
