import React, { Component} from 'react';
import {Button, Row, Col}            from "reactstrap";

import './frame.css';

class FrameElement2 extends Component {
    constructor(props) {
        super(props);

        this.text = props.text;
    }

    render() {
        return (
            <div className="buttoninframes">
                <Row><Col><h3>Button inside nested Frames</h3></Col></Row>
                <Row>
                    <Col>
                        <Button>Button nested inside frame of frame</Button>
                    </Col>
                </Row>

            </div>
        );
    }
}
export default FrameElement2;