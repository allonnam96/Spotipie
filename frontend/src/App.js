import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AlbumIndex from "./components/AlbumRow/albumIndex";
import AlbumShow from "./components/AlbumRow/albumShow";
import Sidebar from "./components/Sidebar/sidebar";


function App() {
  // const history = useHistory();
  // const sessionUser = useSelector(state => state.session.user)
  // if (!sessionUser) history.push('/')

  return (
    <>
      <BrowserRouter>
      {/* <Sidebar /> */}
      <Navigation />
        <Switch>
          <Route path="/login" >
            <Header />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <Header />
            <SignupFormPage />
          </Route>
          <Route path="/albums">
            <AlbumIndex />
            
          </Route>
          <Route path="/albums/:albumId">
          <AlbumShow />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;