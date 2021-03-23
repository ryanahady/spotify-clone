
//Spotify authentication, check user exists and send back to app
export const authEndPoint = "https://accounts.spotify.com/authorize";

//redirect URI back to home page once logged in
const redirectUri = "http://localhost:3000/";

//spotify client id
const clientId = "5f97c2b3b24c4a38b834bf822efb1e98";

//scopes are very important for user permissions like CRUD functionality through API
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

//pull access token from Url
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        
        return initial;
    }, {});
} 

//redirect user to login to spotify 
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
