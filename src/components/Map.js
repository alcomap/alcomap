import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 50.95,
            lng: 0.33
        },
        zoom: 13,
        centerAroundCurrentLocation: false
    };
    



    componentDidMount() {
        return getCurrentLocation().then(position => {
            if (position) {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003,
                    },
                });
            }
        });
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    setPos = {this.componentDidMount()}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

//module.export = Map;
export default Map;