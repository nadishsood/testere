import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className = "column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    );
}

export default App;


//created app as a functional component. Remember we made app as a class because we needed to 
//use state inside App, MOST of the state is now going to be with redux, so now the app components
//are going to be simpler relatively. 


//our app component is no longer in charge of configuring our child components, 
// now we are relying upon redux to do all that 
