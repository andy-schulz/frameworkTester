import React, { Component} from 'react';
import {Button, Row, Col}            from "reactstrap";

import './frame.css';

class FrameElement extends Component {
    constructor(props) {
        super(props);

        this.text = props.text;
    }

    render() {
        return (
            <div className="buttoninframes">
                <Row><Col><h3>Button in single frame</h3></Col></Row>
                <Row>
                    <Col>
                        <Button className="firstNestedButton">Button inside single frame</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default FrameElement;