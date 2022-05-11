import './modal.css'
function Modal(props) {
  return (
    <div className="modal_container">
      <p>Are you sure?</p>
      <button onClick={props.onClick}>cancel</button>
      <button>confirm</button>
    </div>
  )
}

export default Modal;
