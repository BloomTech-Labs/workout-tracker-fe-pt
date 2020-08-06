import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

//components
import Register from "./components/register/register";
import Login from "./components/login/login";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import { WorkoutForm } from "./components/dashboard/createworkout/CreateWorkoutForm";
import Calendar from "./components/calendar/Calendar";
import Profile from "./components/profile/Profile";
import LandingPage from "./components/landingpage/LandingPage";
import ViewableWorkouts from "./components/dashboard/workouts/ViewableWorkouts";
import { NutritionForm } from "./components/dashboard/createnutrition/NutritionForm";
import Diets from "./components/dashboard/diets/diets";
import Feed from "./components/feed/feed";
import HeadFeed from "./components/feed/feedcomponents/HeadFeed";
import Routine from "./components/dashboard/createroutine/Routine";
import AccountInformation from "./components/accountinfo/AccountInformation";
import { decode } from "jsonwebtoken";
import { axiosWithAuth } from "./components/authentication/axiosWithAuth";
import ProfileContext from "./contexts/ProfileContext";
import VerifyForm from "./components/profile/verifieduser/verifiedform/VerifyForm";

function App() {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = () => {
    //provides the info for the specific user that is logged in.
    const { subject } = decode(localStorage.getItem("token"));
    console.log("returns", { subject });
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/users/${subject}`)
      .then((res) => {
        setUserInfo(res.data);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <ProfileContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="App">
        <div className="childRoutes">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route exact path="/feed">
              <Feed />
            </Route>

            <ProtectedRoute
              exact
              path="/createroutine"
              component={Routine}
            ></ProtectedRoute>

            <Route exact path="/feed/:id" component={HeadFeed} />

            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>

            <ProtectedRoute path="/workouts">
              <ViewableWorkouts />
            </ProtectedRoute>

            <ProtectedRoute path="/createworkout">
              <WorkoutForm />
            </ProtectedRoute>

            <ProtectedRoute path="/diets">
              <Diets />
            </ProtectedRoute>

            <ProtectedRoute path="/createnutrition">
              <NutritionForm />
            </ProtectedRoute>

            <ProtectedRoute path="/profile">
              <Profile />
            </ProtectedRoute>

            <ProtectedRoute path="/accountinformation">
              <AccountInformation />
            </ProtectedRoute>

            <ProtectedRoute path="/verify">
              <VerifyForm />
            </ProtectedRoute>

            <ProtectedRoute path="/calendar">
              <Calendar />
            </ProtectedRoute>
          </Switch>
        </div>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
