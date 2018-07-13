import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';


class MapSettings extends Component {

    render() {
        return (
            <div className="mapDiv">
                <ReactBootstrap.ButtonToolbar>
                    {/* Standard button */}
                    <ReactBootstrap.Button>Default</ReactBootstrap.Button>

                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <ReactBootstrap.Button bsStyle="primary">Primary</ReactBootstrap.Button>

                    {/* Indicates a successful or positive action */}
                    <ReactBootstrap.Button bsStyle="success">Success</ReactBootstrap.Button>

                    {/* Contextual button for informational alert messages */}
                    <ReactBootstrap.Button bsStyle="info">Info</ReactBootstrap.Button>

                    {/* Indicates caution should be taken with this action */}
                    <ReactBootstrap.Button bsStyle="warning">Warning</ReactBootstrap.Button>

                    {/* Indicates a dangerous or potentially negative action */}
                    <ReactBootstrap.Button bsStyle="danger">Danger</ReactBootstrap.Button>

                    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                    <ReactBootstrap.Button bsStyle="link">Link</ReactBootstrap.Button>

                </ReactBootstrap.ButtonToolbar>


            </div>

        );
    }
}

//module.export = MapSettings;
export default MapSettings;
