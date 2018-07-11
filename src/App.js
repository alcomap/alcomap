import React, { Component } from 'react';
import Map from './components/Map';

class App extends Component {
    render() {
        return (

            <div className="App">
            <header className="App-header">

            <h1 className="App-title">AlcoMap</h1>
            </header>
                <mapPos className="App-pos">
                    <Map />
                </mapPos>
            </div>


        );
    }
}


export default App;