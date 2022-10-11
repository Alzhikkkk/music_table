import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'
import {BASE_URL} from '../../config/baseurl';

function* getGenres(){
    try{
        const genres = yield axios.get(`${BASE_URL}/api/genres`).then(res => res.data);
        console.log("URAAA")
        yield put({type:types.RECIEVED_GET_GENRES , payload : genres})
    }catch(e){
        yield put({type: types.FAILURE_GET_GENRES , errors: e})
    }
}


export function* genreSagas(){
    yield all([
        yield takeLatest(types.GET_GENRES, getGenres),
    ])
}