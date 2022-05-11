import './backdrop.css'
function Backdrop(props) {
  return (
    <div className="backdrop_container" onClick={props.onCancel}>

    </div>
  )
}

export default Backdrop;
