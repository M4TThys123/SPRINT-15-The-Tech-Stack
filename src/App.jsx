import "./App.css";
import React, { useState } from "react";
import {
  PrismicRichText,
  useFirstPrismicDocument,
  PrismicImage,
} from "@prismicio/react";

// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"

// import PageCounter from "./components/PageCounter";


// import Counter from "./components/Counter";
// import EmitEvent from "./components/EmitEvent"


function App() {
  const [showModal, setShowModal] = useState(true);

  function cancelModal() {
    setShowModal(false);
  }


  return (
    <>
      <Header></Header>
      {/* <Nav /> */}

      <main>
        <Homepage></Homepage>
      </main>

      <Footer></Footer>

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
    </>
  );
}

export default App;
