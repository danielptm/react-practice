import Card from "../components/ui/Card";
import Layout from "../components/layout/Layout";
import classes from './styles.module.css'
import {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function NewMeetupPage() {
  const titleRef = useRef()
  const h = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    console.log('reloading component ... ');
  }, [url])

  function post(payload) {
    fetch("http://mydummyurl.com", {method: "POST", body: JSON.stringify(payload), headers: {'Content-Type': "application/json"}})
      .then(res => {
        h.replace('/')
      })
  }

  function submitHandler(e) {
    console.log('submitted')
    e.preventDefault()
    const payload = {title: titleRef.current.value}
    setSubmitted(true)
  }

  return (
    <Layout>
      <Card>
        <form className={classes.container} onSubmit={submitHandler}>
          <div>
            <div htmlFor="url">image</div>
            <p>Reload component only if url changes, not if title changes</p>
            <p>{url}</p>
            <input id="url" type="url" onChange={ (e) => setUrl(e.target.value)}/>
          </div>
          <div>
            <div htmlFor="text">title</div>
            <input id="text" type="text"  ref={titleRef} />
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.button}>Submit</button>
          </div>
        </form>
      </Card>
    </Layout>
  )
}

export default NewMeetupPage;
