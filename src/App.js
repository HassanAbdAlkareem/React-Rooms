import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components-Rooms/Navbar";
import Home from "./Pages-Rooms/Home";
import OurRooms from "./Pages-Rooms/OurRooms";
import Error from "./Pages-Rooms/Error";
import SinglePage from "./Pages-Rooms/SinglePage";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/rooms">
          <OurRooms />
        </Route>

        <Route exact path="/rooms/:slug">
          <SinglePage />
        </Route>

        <Route exact path="">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
