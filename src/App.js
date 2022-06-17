import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages
import Homepage from './pages/homepage/Homepage.js'
import Event from './pages/event/Event.js'
import Submit from './pages/submit/Submit.js'
import VenueCalendar from './pages/venueCalendar/VenueCalendar.js'



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
            <Route exact path="/event/:id">
              <Event />
            </Route>
            <Route exact path="/submit">
              <Submit />
            </Route>
            <Route exact path="/venue-calendar/:id">
              <VenueCalendar />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
