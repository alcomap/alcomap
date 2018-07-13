import React, { Component } from 'react';
import Map from './components/Map';
import logo from './amlogo.png';
import MapSettings from "./components/MapSettings";

class App extends Component {
    render() {
        return (

            <html>
                {/* header */}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

                {/* body */}
                <body className="body">
                    <div className="App">

                        <mapPos className="Map-pos">
                            <Map/>
                        </mapPos>

                        <mapSet className="Map-set">
                            <MapSettings/>
                        </mapSet>
                    </div>
                </body>

                {/* footer */}
                <footer className="app-footer">
                    <p>Derp <a href="">
                        derpderpderp</a>.</p>
                </footer>
            </html>

        );
    }
}


export default App;