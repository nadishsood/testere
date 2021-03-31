import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>, document.querySelector("#root"));




//createStore takes in the combined reducers and it returned back a redux store and all of our
// application data and state

//in our codepen, we got a reference to object created by createstore and we played around with it. 
//with react-redux, we dont mess with it directly, we just pass it to provider
// and provider takes care of it from there

//in a typical redux application we will rarely interact directly with the store

//any component in the heirarchy can make use of the connect and communicate with the provider and
//make use of the data inside the redux store

