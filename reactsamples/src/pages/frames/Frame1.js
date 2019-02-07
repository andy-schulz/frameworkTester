import React, {Component}                 from 'react';
import Iframe                             from 'react-iframe'
import {Row, Col, Button}                 from "reactstrap/";

class Frame1 extends Component {
    render() {
        return (
            <div>
                <div className="buttonoutsideframes">
                    <Row><Col><h3>Button outside of Frame</h3></Col></Row>
                    <Row>
                        <Col>
                            <Button>Button outside of Frame</Button>
                        </Col>
                    </Row>
                </div>
            <Iframe url="/frameelement"
                    width="100%"
                    height="150px"
                    id="myId"
                    className="button-in-single-frame frametest"
                    display="initial"
                    position="relative"
                    scrolling="false"
                    allowFullScreen/>

            <Iframe url="/nestedFrame2"
                    width="100%"
                    height="150"
                    id="myId"
                    className="button-in-two-frames frametest"
                    display="initial"
                    position="relative"
                    scrolling="false"
                    allowFullScreen/>
            </div>
        );
    }
}
export default Frame1;