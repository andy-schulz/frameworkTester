import React, { Component}          from 'react';
import Iframe from 'react-iframe'
class Frame2 extends Component {
    render() {
        return (
            <div>
                <Iframe url="/frameelement2"
                        width="100%"
                        height="150px"
                        id="myId"
                        className="button-in-single-frame frametest"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
            </div>
        );
    }
}
export default Frame2;