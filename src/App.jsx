import "./App.css";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import React, { useState } from "react";

function App() {
  return <Counter />
  
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => {setShowModal(true)}}>ToggleModal</button>
      {showModal && <Modal title="Weet je het zeker?" />}
    </>
  );
}

export default App;
