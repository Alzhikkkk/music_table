import {combineReducers} from 'redux';
import songsReducers from './songReducers';
import genresReducers from './genreReducers';

export default combineReducers({
    songsReducers,
    genresReducers
})