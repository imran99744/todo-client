import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemChange = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/todo-list")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const postItem = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:3000/add-item")
  //     .then((res) => setItems(res.data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="main__div">
      <div className="center__div">
        <br />
        <h1>Todo List App</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Item"
          value={inputList}
          onChange={itemChange}
        />
        <button onClick={listOfItems}>Add</button>

        <ol className="todo__style">
          {items.map((item) => {
            return <li value={items}>{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
