import React from "react";
import {  Route } from "react-router-dom";

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
import Register from "./components/signup/signup";

function App() {
  return (
    <div className="App">
            <Route exact path="/" component={LandingPage}/>

            <Route path="/register" component={Register}/>

            <Route path="/login" component={Login}/>

            <Route path="/public" component={ViewableWorkouts}/>

            <ProtectedRoute path="/dashboard" component={Dashboard}/>

            <ProtectedRoute path="/createworkout" component={WorkoutForm}/>

            <ProtectedRoute path="/profile" component={Profile}/>

            <ProtectedRoute path="/editprofile" component={ProfileForm}/>
            <ProtectedRoute path="/calendar" component={Calendar}/>
    </div>
  );
}

export default App;
