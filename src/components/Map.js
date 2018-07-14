/* global google */

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker, withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
const google = window.google;

class Map extends React.Component {
    constructor() {
        super();

        this.state = {
            latitude: '',
            longitude: '',
        };

        this.getMyLocation = this.getMyLocation.bind(this)
    }

    componentDidMount() {
        this.getMyLocation()
    }

    static defaultProps = {
        center: {
            lat: 50.95,
            lng: 0.33
        },
        zoom: 13,
        centerAroundCurrentLocation: false
    };

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            }, (error) => {
                this.setState({latitude: 'err-latitude', longitude: 'err-longitude'})
            })
        }
    }



    render() {
        const { latitude, longitude } = this.state
        const position = [latitude, longitude]

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
                    defaultZoom={14}
                    center={{lat: latitude, lng: longitude}}
                >


                </GoogleMapReact>
            </div>
        );
    }
}

/*<Marker
    position={position}
/>*/
export default Map;