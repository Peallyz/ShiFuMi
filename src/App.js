import React from "react";
import Game from "./Components/Game";
import Rules from "./Components/Rules";
import ScoreBoard from "./Components/ScoreBoard";

const App = () => {
    return (
        <div className="App">
            <ScoreBoard />
            <Game />
            <Rules />
        </div>
    );
};

export default App;
