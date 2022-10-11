import {all} from 'redux-saga/effects';
import { genreSagas } from './genreSagas';
import { songSagas } from './songSagas';



export default function* rootSaga(){
    yield all([
       songSagas(),
       genreSagas()
    ])
}