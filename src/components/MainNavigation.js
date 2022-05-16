import classes from './styles.module.css'
import {Link} from "react-router-dom";


function MainNavigation() {
  return (
    <header className={classes.container}>
      <div>
        React meetups
      </div>
      <nav>
        <ul className={classes.list}>
          <li><Link to='/all'>All meetups</Link></li>
          <li><Link to='/new'>New meetups</Link></li>
          <li><Link to='/favorites'>Favoites</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
