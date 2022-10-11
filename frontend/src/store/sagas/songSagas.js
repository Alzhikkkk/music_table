import {all , put , takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios'
import {BASE_URL} from '../../config/baseurl';

function* getSongs(){
    try{
        const songs = yield axios.get(`${BASE_URL}/api/songs`).then(res => res.data);
        yield put({type:types.RECIEVED_GET_SONGS , payload : songs})
    }catch(e){
        yield put({type: types.FAILURE_GET_SONGS , errors: e})
    }
}


function* createSong({artist, song, genre, release}){
    try{
        
        const onesong = yield axios.post(`${BASE_URL}/api/songs`, {artist, song, genre, release}, {headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}}).then(res => res.data);
        yield put({type:types.RECIEVED_NEW_SONG, payload : onesong})
    }catch(e){
        yield put({type: types.FAILURE_CREATE_SONG, errors: e})
    }
}

export function* songSagas(){
    yield all([
        yield takeLatest(types.GET_SONGS, getSongs),
        yield takeLatest(types.CREATE_SONG, createSong),
    ])
}