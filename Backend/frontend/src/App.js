import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Header from "./components/Header";


function App() {
  // const history = useHistory();
  // const sessionUser = useSelector(state => state.session.user)
  // if (!sessionUser) history.push('/')

  return (
    <>
      <Switch>
        <Navigation />
        <BrowserRouter>

          <Route path="/login" >
            <Header />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Header />
            <SignupFormPage />
          </Route>

        </BrowserRouter>
      </Switch>
    </>
  );
}

export default App;