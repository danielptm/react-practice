import classes from './styles.module.css'
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.container}>
        <div><img src={props.image} alt={props.title}/></div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button>To favorites</button>
        </div>
      </li>
    </Card>
  )
}

export default MeetupItem;
