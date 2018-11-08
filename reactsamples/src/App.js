import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { Container, Row, Col, Label } from 'reactstrap';
import {DelayedButton} from "./lib/DelayedButton";
import {DropDownList, DropDownOptionList} from "./lib/DropDownList";
import {InputEmail} from "./lib/InputFields";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row><Col><h2>Inputs</h2></Col></Row>
                    <Row>
                        <Col><InputEmail></InputEmail></Col>
                        <Col></Col>
                    </Row>

                    <Row><Col><h2>Buttons</h2></Col></Row>
                    <Row>
                        <Col>
                            <Button color="danger" data-test-id="button">Danger!</Button>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                    <Row><Col><h2>Option List</h2></Col></Row>
                    <Row>
                        <Col>
                            <DropDownOptionList></DropDownOptionList>
                        </Col>
                        <Col>
                            <DropDownList>Test</DropDownList>
                        </Col>
                    </Row>
                    <Row><Col><h2>Delayed Buttons</h2></Col></Row>
                    <Row>
                        <Col>
                            <Label>buttons appear in x seconds</Label>
                        </Col>
                        <Col>
                            <DelayedButton delayType="Appear" wait={5000} />
                        </Col>
                        <Col>
                            <DelayedButton delayType="Appear"wait={10000} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Label>buttons disappear in x seconds</Label>
                        </Col>
                        <Col>
                            <DelayedButton delayType="Disappear" wait={5000} />
                        </Col>
                        <Col>
                            <DelayedButton delayType="Disappear"wait={10000} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;