import { useState } from "react";

import Button from "./Button";
import ToDoList from "./ToDoList";
import CoinTracker from "./CoinTracker";
import MovieApp from "./MovieApp";

const Home = () => {
  const [choice, setChoice] = useState();
  const onChange = (event) => {
    setChoice(event.target.value);
  };
  return (
    <div>
      <h1>Hello React Beginner</h1>
      <select onChange={onChange}>
        <option value="x">select function</option>
        <option value="3">MovieApp</option>
        <option value="2">CoinTracker</option>
        <option value="1">ToDoList</option>
        <option value="0">Button</option>
      </select>
      <hr />
      {choice === "3" && <MovieApp />}
      {choice === "2" && <CoinTracker />}
      {choice === "1" && <ToDoList />}
      {choice === "0" && <Button text="continue" />}
    </div>
  );
};

export default Home;
