import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
import PhotoDetails from './PhotoDetails';
import M from 'materialize-css/dist/js/materialize.min.js';
import Users from './Users';
import UserAlbums from './UserAlbums';


const Main = () => {
    let sidenav = document.querySelector('#slide-out');

    M.Sidenav.init(sidenav, {});
    
  return (
    <Routes>
        <Route>
          <Route exact path="/albums" element={<Albums />} />
           <Route exact path="/" element={<Home />} />
           <Route exact path="/albums/:id/photos"  element={<AlbumDetails />} />
           <Route exact path="/photo/:id"  element={<PhotoDetails />} />
           <Route exact path="/users" element={<Users />} />
             <Route exact path="/users/:id/albums"  element={<UserAlbums />} />
           
           
         
        </Route>
      </Routes>
  );
}

export default Main;