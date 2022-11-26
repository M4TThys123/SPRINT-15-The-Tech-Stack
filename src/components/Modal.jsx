import './Modal.css'

function Modal() {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">Weet je het zeker?</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel">Annuleren</button>
          <button className="btn btn__primary">Bevestigen</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}
export default Modal;