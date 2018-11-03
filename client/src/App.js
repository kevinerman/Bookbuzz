import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch/NoMatch";
// import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import BookClub from "./pages/BookClub/BookClub";
import Search from "./pages/Search/Search";
import SavedBooks from './pages/SavedBooks/SavedBooks';
import Profile from './pages/Profile/Profile'
import './App.css';
import Auth from './Auth/Auth';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
 

const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Search} />
          <Route path="/callback" component={(props) => {
            handleAuthentication(props);
            console.log("props at callback: ", props);
            return <Profile/>
          }}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bookclub" component={BookClub} />
          <Route exact path="/home" component={Search} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route exact path="/profile" component={Profile} />  
          <Route component={NoMatch} />
        </Switch>      
      </div>
    </Router>
  );
  
  export default App;