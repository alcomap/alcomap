import React, { Component } from 'react';
import Map from './components/Map';

class App extends Component {
    render() {
        return (

            <div className="App">
            <header className="App-header">

            <h1 className="App-title">AlcoMap</h1>
            </header>
                <mapPos className="Map-pos">
                    <Map />
                </mapPos>
                <div className="footer">Kontakt shit here</div>

            </div>


        );
    }
}


export default App;