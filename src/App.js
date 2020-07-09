import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components
import Signup from "./components/signup/Signup";
import Login from "./components/login/login";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { WorkoutForm } from "./components/dashboard/createworkout/CreateWorkoutForm";
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
import LandingPage from "./components/landingpage/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/register">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute path="/createworkout">
            <WorkoutForm />
          </ProtectedRoute>

          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute path="/calendar">
            <Calendar />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
