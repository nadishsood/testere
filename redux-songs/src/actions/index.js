//actionCreator

export const selectSong=(song)=>{

    //return an action, type is required, but payload is not

    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};


