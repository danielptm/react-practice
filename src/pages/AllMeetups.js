import './styles.module.css'
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first step",
    image: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg",
    description: "m1 description"
  },
  {
    id: "m2",
    title: "This is a second step",
    image: "https://www.akc.org/wp-content/uploads/2021/09/Finnish-Lapphund-shutterstock_1038964219.jpg",
    description: "m2 description"
  }
]


function renderDummy() {
  return <MeetupList meetups={DUMMY_DATA}/>
}
function AllMeetupsPage() {
  return (
    <div className='container'>
      <section>
        {renderDummy()}
      </section>
    </div>
  )
}

export default AllMeetupsPage;
