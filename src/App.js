import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";
import colors from "./colors";
import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [choices, setChoices] = useState([
    {
      name: "Peter",
      color: "Green",
      account: "account",
    },
  ]);

  const changeName = (name) => {
    setName(name);
  };

  const changeColor = (color) => {
    setColor(color);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      const accounts = await web3.eth.getAccounts();
      const newColor = await colors.methods.addChoice(name, color).send({
        from: accounts[0],
      });
      setChoices([...choices, { name, color, account: accounts[0] }]);
      console.log(newColor);
      setSubmitting(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdate = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = choices.filter((choice) => choice.account === accounts[0]);
    const resultIndex = choices
      .map((choice) => choice.account)
      .indexOf(accounts[0]);

    try {
      if (result) {
        setSubmitting(true);

        const colorUpdate = await colors.methods
          .updateChoices(name, color, resultIndex)
          .send({
            from: accounts[0],
          });

        setChoices(
          choices.map((choice) => {
            if (choice.account === accounts[0]) {
              return {
                name,
                color,
                account: accounts[0],
              };
            } else return choice;
          })
        );

        console.log(colorUpdate);
        setSubmitting(false);
      } else {
        alert("Unable to match your address to a previous entry");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (submitting) {
    return (
      <div>
        <h1>Submitting your request</h1>
        <h2>This may take a few moments...</h2>
      </div>
    );
  } else if (choices.length <= 0) {
    return (
      <div className="App">
        <form onSubmit={onSubmit}>
          <h1>Enter your name and favorite color</h1>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={(event) => changeName(event.target.value)}
          />
          <br />
          <label htmlFor="favoriteColor">Favorite Color: </label>
          <select onChange={(event) => changeColor(event.target.value)}>
            <option value=""></option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="App">
        <form onSubmit={onSubmit}>
          <h2>Enter your name and favorite color:</h2>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={(event) => changeName(event.target.value)}
          />
          <br />
          <label htmlFor="favoriteColor">Favorite Color: </label>
          <select onChange={(event) => changeColor(event.target.value)}>
            <option value=""></option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onUpdate}>Update</button>

        <hr />
        <h2>Current choices:</h2>
        <ul>
          {choices.map((choice, index) => {
            return (
              <div key={index}>
                <span className="choice">
                  <b>{choice.name} - </b>
                </span>
                <span className={`choice ${choice.color}`}>
                  <b>{choice.color}</b>
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
