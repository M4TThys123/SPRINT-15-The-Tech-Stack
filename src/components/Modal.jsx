import "./Modal.css";

function Modal({ title, secondary, primary, secondaryFunciton, primaryFunciton  }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={() => {primaryFunciton(false)}}
          >
            {secondary}
          </button>
          <button
            className="btn btn__primary"
            onClick={() => {
              secondaryFunciton(false);
            }}
          >
            {primary}
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}
export default Modal;
