
import './App.css';
import Login from './Login';
import React, {useEffect, useState} from 'react';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

//spotify instance between our app and spotify
const spotify = new SpotifyWebApi(); //connect spotify with react

function App() {
  //use state hook 
  // const [token, setToken] = useState(null);

  //get the user and update values 
  const[{user, token}, dispatch] = useDataLayerValue();

  //useEffeect hook that runs code on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); //get token from that point 
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token){
      //lets you set and get token and talk back and fourth from spotify
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);    
      
      //get users account, returns promise and shows in console
      spotify.getMe().then((user) =>{
        dispatch({
        type: "SET_USER",
        user: user,
          });
       });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists
      })
    })

    // get your playlist from spotify, get your discover weekly feed
    spotify.getPlaylist('3zn2Q6pCQZa177Pdo6slka').then(response => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    })



  }
    
    console.log("I have a token ", token);
  }, []);

  console.log(user);
  console.log(token);

  return(
    <div className="app">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }
    </div>
  );
}

export default App;
