import "./App.css";
import React, { useState } from "react";
import { PrismicRichText, useFirstPrismicDocument } from '@prismicio/react'

// Components
import Nav from "./components/Nav";
import Modal from "./components/Modal";
// import PageCounter from "./components/PageCounter";

// import Counter from "./components/Counter";
// import EmitEvent from "./components/EmitEvent"

function App() {
  const [document] = useFirstPrismicDocument()
  console.log(document)
  

  const [showModal, setShowModal] = useState(true);

  function cancelModal () {
    setShowModal(false)
  }

  return(
      <div>
        hallo
    {/* {document && (
      <PrismicRichText field={document.data.example_rich_text} />
    )} */}
    </div>
  )

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
