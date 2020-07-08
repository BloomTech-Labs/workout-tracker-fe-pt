import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { WorkoutForm } from "./components/dashboard/CreateWorkoutForm";
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
import LandingPage from "./components/landingpage/LandingPage";
import ViewableWorkouts from "./components/dashboard/ViewableWorkouts";
import ProfileForm from "./components/profile/form/ProfileForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} exact />
      </Router>
    </div>
  );
}

export default App;
