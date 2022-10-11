import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    songs: []
}


export default function songsReducers(state=initialState, action) {
    switch(action.type) {
        case types.RECIEVED_GET_SONGS: 
            return {...state, songs: action.payload};
        case types.FAILURE_GET_SONGS:
            // alert(JSON.stringify(action.errors))
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;

    
        case types.CREATE_SONG: 
            return {...state, isLoading: true}
        case types.RECIEVED_NEW_SONG: 
            return {...state, isLoading: false, songs: [...state.songs, action.payload]}      
        case types.FAILURE_CREATE_SONG:
            alert(JSON.stringify(action.errors));
            return {...state, isLoading: false};

        default:
            return state;
    }
}
