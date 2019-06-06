import React, {Component}                 from 'react';
import {Button}                           from 'reactstrap';
import {Container, Row, Col}              from 'reactstrap';
import {DropDownList, DropDownOptionList} from "./lib/DropDownList";
import {LoginExample}                     from "./lib/LoginExample";

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row><Col><h2>Inputs</h2></Col></Row>
                    <Row>
                        <Col data-test-id="LoginExampleRow1"><LoginExample test="1"></LoginExample></Col>
                        <Col data-test-id="LoginExampleRow2"><LoginExample test="2"></LoginExample></Col>
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
                    <Row><Col>
                        <h2>Hovers</h2>
                        <p>Hover over the image for additional information</p>
                    </Col></Row>
                    <Row>
                        <Col>
                            <div>Show user information in hover</div>
                            <div data-test-id="usericon" className="hover-me fas fa-user" alt="User Avatar" style={{ fontSize: '3em' }}></div>
                            <div className="my-hover-info">
                                <h5 data-test-id="hoverusername" >Name: User Name</h5>
                                <div>B-day: 01.01.1970</div>
                                <a href="/users/">View User Information</a>
                            </div>

                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;