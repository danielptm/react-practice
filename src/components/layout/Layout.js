import classes from './layout.module.css'

function Layout(props) {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}

export default Layout;
