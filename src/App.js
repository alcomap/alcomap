import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from './Map';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
//var Map = require('./Map.js');

class App extends React.Component {
    render() {
        return (

            <div className='App'>
                <Map />
            </div>
        );
    }
}


export default App;