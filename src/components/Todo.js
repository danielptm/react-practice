import './todo.css'
import Modal from "./Modal";
import {useState} from "react";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler() {
    if (modalIsOpen) {
      setModalIsOpen(false)
    } else {
      setModalIsOpen(true)
    }
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen ? <Modal onClick={closeModal} /> : null}
      {modalIsOpen ? <Backdrop onCancel={closeModal} /> : null}
    </div>
  )

}
export default Todo;
