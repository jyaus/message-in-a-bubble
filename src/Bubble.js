import { useState } from "react";

export default function Bubble({ id, seedone, seedtwo, deleteHandler, children }) {
  
  const [isPopping, setIsPopping] = useState(false);

  function animatePop(deleteHandler) {
    setIsPopping(true);
    deleteHandler();
  }

  return (
    <button
      id={id}
      className={isPopping ? "bubble popping" : "bubble"}
      onClick={
        () => {
          return (animatePop(deleteHandler))
        }
      }
      style={{
        "--bubble-seed-one": seedone,
        "--bubble-seed-two": seedtwo
      }}
    >
      {children}
    </button>
  );
}
