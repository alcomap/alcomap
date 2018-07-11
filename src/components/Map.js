import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 50.95,
            lng: 0.33
        },
        zoom: 13
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '70%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

//module.export = Map;
export default Map;