import React, { Component } from 'react';
import Map from './components/Map';
import logo from './amlogo.png';

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
                            <Map />
                        </mapPos>


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