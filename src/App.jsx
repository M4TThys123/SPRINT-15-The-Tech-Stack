import "./App.css";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import React, { useState } from "react";
import EmitEvent from "./components/EmitEvent"

function App() {
  const [showModal, setShowModal] = useState(false);

  function clickedFunction () {
    console.log('Parent wordt genotificeerd')
  }
  return(
    <EmitEvent prop={clickedFunction}/>
    )

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        ToggleModal
      </button>

      {showModal && (
        <Modal
          // Text
          title="Ben je voor het eerst op deze website?"
          secondary="nee"
          primary="ja"

          // Emitting Events 
          secondaryFunciton="setShowModal(fasle)"
          primaryFunciton="setShowModal"
        />
      )}
    </>
  );
}

export default App;
