import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';



const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};


const slideStyle = { width: 350, margin: 50};

class MapSettings extends Component {
    render() {
        return (
            <div className="mapDiv">

                {/* Standard button */}
                {/* <ReactBootstrap.Button>Update</ReactBootstrap.Button> */}


                <div style={slideStyle}>
                    <h4 className="slideInfoText">Radius slider</h4>
                    <Slider min={0} max={20} defaultValue={3} handle={handle} />
                </div>

                <div style={slideStyle}>
                    <h4 className="slideInfoText">penislengde</h4>
                    <Slider min={0} max={20} defaultValue={3} handle={handle} />
                </div>

                <div style={slideStyle}>
                    <h4 className="slideInfoText">golifalidjnjasf</h4>
                    <Slider min={0} max={20} defaultValue={3} handle={handle} />
                </div>

                <div style={slideStyle}>
                    <h4 className="slideInfoText">derpdarp</h4>
                    <Slider min={0} max={20} defaultValue={3} handle={handle} />
                </div>

            </div>

        );
    }

}

//module.export = MapSettings;
export default MapSettings;
