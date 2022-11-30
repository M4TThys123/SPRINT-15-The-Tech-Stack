import './App.css';
import Modal from './components/Modal';

function App() {
  let isModalOpen = false;

  function toggleModal(){
    console.log('model klikt')
    isModalOpen = !isModalOpen
  }

  return (
    <>
      <button onClick={toggleModal}>ToggleModal</button>
      {isModalOpen && <Modal title="Weet je het zeker?"/>}
    </>
  );
}

export default App;
