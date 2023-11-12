import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
  return (
    <>
    {/* <Navigation/> */}
    <BrowserRouter>
        <Switch>
          <Route path="/login" >
            <Header/>
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Header/>
            <SignupFormPage />
          </Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;