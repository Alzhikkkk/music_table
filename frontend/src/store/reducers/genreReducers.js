import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    genres: []
}


export default function genresReducers(state=initialState, action) {
    switch(action.type) {
        case types.RECIEVED_GET_GENRES: 
            return {...state, genres: action.payload};
        case types.FAILURE_GET_GENRES:
            // alert(JSON.stringify(action.errors))
            alert("Ведутся технические работы, по пробуйте позже!");
            return state;
        default:
            return state;
    }
}
