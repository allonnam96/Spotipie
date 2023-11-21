import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AlbumIndex from "./components/AlbumRow/albumIndex";
import AlbumShow from "./components/AlbumRow/albumShow";
import Sidebar from "./components/Sidebar/sidebar";
import Playbar from "./components/Playbar/Playbar";


function App() {
  // const history = useHistory();
  // const sessionUser = useSelector(state => state.session.user)
  // if (!sessionUser) history.push('/')

  // most specific route must be above less specific
  // exact path
  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route path="/login" >
            <Header />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Header />
            <SignupFormPage />
          </Route>
          <Route path="/albums/:albumId">
            {/* <Sidebar />
            <Navigation /> */}
            <AlbumShow />
            <Playbar/>
          </Route>
          <Route path="/">
            <AlbumIndex />
            <Sidebar />
            <Navigation />
            <Playbar/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;