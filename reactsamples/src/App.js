import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {DelayedButton} from "./lib/DelayedButton";
import {DropDownList} from "./lib/DropDownList";

import './App.css';

class App extends Component {


    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Button color="danger" data-test-id="button">Danger!</Button>
                        </Col>
                        <Col>
                            <DropDownList>Test</DropDownList>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DelayedButton wait={5000} />
                        </Col>
                        <Col>
                            <DelayedButton wait={10000} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}



export default App;
