import "./App.css";
import React, { useState } from "react";

import Nav from "./components/Nav";
import Modal from "./components/Modal";
// import PageCounter from "./components/PageCounter";

// import Counter from "./components/Counter";
// import EmitEvent from "./components/EmitEvent"

function App() {
  const [showModal, setShowModal] = useState(true);

  function cancelModal () {
    setShowModal(false)
  }

  return (
    <div className="container">
      <Nav />
      
      <main>
          
      </main>

      {showModal && (
        <Modal
          // Text
          title="Ben je voor het eerst op deze website?"
          secondary="nee"
          primary="ja"
          // Emitting Events
          secondaryFunciton={cancelModal}
          primaryFunciton={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
