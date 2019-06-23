import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", { id: "sometihng-important" }, "Adopt Me!!!"),
        React.createElement(Pet, {
            name: "Agnes",
            animal: "Rabbit",
            color: "gold"
        }),
        React.createElement(Pet, {
            name: "Dante",
            animal: "Rabbit",
            color: "White and Black"
        }),
        React.createElement(Pet, {
            name: "Negrita",
            animal: "Rabbit",
            color: "Dark"
        })
    ]);
};

render(React.createElement(App), document.getElementById("root"));