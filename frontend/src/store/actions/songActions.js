import * as types from './types';

export function getSongs(){
    return {type: types.GET_SONGS}
}

export function createSong(artist, song, genre, release){
    return {type: types.CREATE_SONG, artist, song, genre, release}
}

