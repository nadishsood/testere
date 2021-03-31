import {combineReducers} from'redux';

//static reducer, in general not even need to do this in redux
const songsReducer=()=>{
    return [
      { title: "a", duration: "2:00" },
      { title: "b", duration: "3:00" },
      { title: "c", duration: "2:15" },
      { title: "d", duration: "6:00" }
    ];
};

//reducer for selecting a specific song

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
});


