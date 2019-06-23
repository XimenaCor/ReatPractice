const Pet = ({ name, animal, color }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, color)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
