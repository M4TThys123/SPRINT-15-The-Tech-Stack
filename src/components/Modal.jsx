import "./Modal.css";

function Modal({ title }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={() => {
              console.log("Annuleren");
            }}
          >
            Annuleren
          </button>
          <button
            className="btn btn__primary"
            onClick={() => {
              console.log("Bevestigen");
            }}
          >
            Bevestigen
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}
export default Modal;
