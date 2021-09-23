import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" component={SearchPage} />
          <Route path="/movie-details/:movieId" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
