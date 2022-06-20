import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages
import Homepage from './pages/homepage/Homepage.js'
import Event from './pages/event/Event.js'
import Submit from './pages/submit/Submit.js'
import VenueCalendar from './pages/venueCalendar/VenueCalendar.js'
import VenueList from './pages/venueList/Venues'



// components


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/event/:id">
              <Event />
            </Route>
            <Route path="/submit">
              <Submit />
            </Route>
            <Route path="/venue-calendar/:id">
              <VenueCalendar />
            </Route>
            <Route path="/venues">
              <VenueList />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
