import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AlbumIndex from "./components/AlbumRow/albumIndex";
import AlbumShow from "./components/AlbumRow/albumShow";


function App() {
  // const history = useHistory();
  // const sessionUser = useSelector(state => state.session.user)
  // if (!sessionUser) history.push('/')

  return (
    <>

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
          <Navigation/>
          <Route path="/albums/:albumId">
          <Navigation/>
          <AlbumShow/>
        
          </Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;