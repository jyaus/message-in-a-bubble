import "./App.css";
import Bubble from "./Bubble";
import Panel from "./Panel";
import { useRef, useState } from "react";
import React from "react";

export default function App() {
  const placeholderArray = [
    {
      id: 1,
      seedone: 1.234,
      seedtwo: 4.567,
      message: "sending out an LOL",


      popping: false,
    },
    {
      id: 2,
      seedone: 7.89,
      seedtwo: 5.678,
      message: "I'll send an LOL to the world",
      popping: false,
    },
    {
      id: 2,
      seedone: 3.45,
      seedtwo: 1.567,
      message: "I hope that someone gets my...",
      popping: false,
    },
  ];

  const [bubbles, setBubbles] = useState(() => {
    const savedBubbles = localStorage.getItem("bubbles");
    const initialValue = JSON.parse(savedBubbles);
    return initialValue || placeholderArray;
  });

  const [count, setCount] = useState(placeholderArray.length);
  const messageRef = useRef();

  function addBubble() {
    if (messageRef.current.value) {
      const newArray = [...bubbles];
      const newBubble = {
        id: count,
        seedone: Math.random() * 10,
        seedtwo: Math.random() * 10,
        message: messageRef.current.value,
        popping: false,
      };
      setCount(count + 1);
      newArray.push(newBubble);
      storeBubbles(newArray);
      setBubbles(newArray);
      messageRef.current.value = "";
    }
  }

  function popBubble(id) {
    setTimeout(function () {
      deleteBubble(id);
    }, 200);
  }

  function deleteBubble(id) {
    const oldArray = [...bubbles];
    const newArray = oldArray.filter((bubble) => bubble.id !== id);
    storeBubbles(newArray);
    setBubbles(newArray);
  }

  /*
    Ideally, this would be stored to a database rather than local storage,
    so that the messages would be shared by all visitors across sessions
  */
  function storeBubbles(data) {
    localStorage.setItem("bubbles", JSON.stringify(data));
  }

  return (
    <div className="App">
      <div className="bg" />
      <div className="bubbles">
        {bubbles.map((bubble) => {
          return (
            <Bubble
              key={bubble.id}
              id={bubble.id}
              seedone={bubble.seedone}
              seedtwo={bubble.seedtwo}
              deleteHandler={() => popBubble(bubble.id)}
            >
              {bubble.message}
            </Bubble>
          );
        })}
      </div>

      <Panel messageRef={messageRef} clickHandler={addBubble} />
    </div>
  );
}
