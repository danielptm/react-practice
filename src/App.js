import {Route, Routes} from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route exact path='/all' element={<AllMeetupsPage />} />
        <Route exact path='/new' element={<NewMeetupPage />} />
        <Route exact path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>);
}

export default App;
