import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/Form/SignupFormPage";
import LoginFormPage from "./components/Form/LoginFormPage";
import Navigation from "./components/Main/Navigation";
import AlbumIndex from "./components/Main/AlbumRow/albumIndex";
import AlbumShow from "./components/Main/AlbumRow/albumShow";
import Sidebar from "./components/Main/Sidebar/sidebar";
import Playbar from "./components/Main/Playbar/Playbar";
import Search from "./components/Main/Search/search";

function App() {
  return (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/search" exact>
          <Navigation />
          <Sidebar />
          <Playbar />
          <Search />
        </Route>
          <Route path="/albums/:albumId" component={AlbumShow}>
            <Sidebar />
            <Navigation />
            <AlbumShow />
            <Playbar />
          </Route>
          <Route path="/">
            <Sidebar />
            <Navigation />
            <AlbumIndex />
            <Playbar />
          </Route>
        </Switch>

  );
}

export default App;
