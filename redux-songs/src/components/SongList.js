import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from './../actions';

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key = {song.title}>
                    <div className = "right floated content">
                        <button className="ui button primary" onClick = {()=>{this.props.selectSong(song)}}>
                            Select
                        </button>
                    </div>
                    <div className = "content">{song.title}</div>
                </div>
            );
        });
    }
    render(){
        
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

//state - from redux store
//anytime we run our reducers and change the state, this fn runs with new state object

const mapStateToProps=(state)=>{

    
    return { songs: state.songs};

}

//connect wired to the action creator and this component
//connect will take the action creator and pass it to this component as props. 
//if we call this function (the action creator) the returned action will be sent to redux's dispatch function


export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);  


//the object we return from mapStateToProps will show up as props in the 
//songlist component

