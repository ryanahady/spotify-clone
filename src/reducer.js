//this file allows alot of things in the app to work 

export const initialState = {
    user: null, 
    playlists: false,
    playing: false,
    item: null,
    //remove this token after developing
    // token:"BQBl6JWdR_8vNgdAIK3Bn0JBB15sXc_IR8IL4qnwr4N1AdLy-RwEMq0-TwW6_b2d5LKSbtz1IjN50VVd4pWwmN2ad6wPGpd5ZI4V-WSzt5oo1MnRcwzf9hmvHhCK2eq46Nyr2rZe2iHtRRq5spGN7OBzqrXV_eQ2zeqUsxgo5MFkqtKe"
};

const reducer = (state, action) => {
    console.log(action); //debugging tool 

    switch(action.type){
        case 'SET_USER':
            return{
               ...state,
               user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer;