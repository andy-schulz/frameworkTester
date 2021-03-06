import React, {Component, Checkbox}       from 'react';
import {Button, Input, Label}             from 'reactstrap';
import {Container, Row, Col}              from 'reactstrap';
import {DropDownList, DropDownOptionList} from "./lib/DropDownList";
import {LoginExample}                     from "./lib/LoginExample";

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const divStyle = {
    "text-align": 'left',
};

class App extends Component {

    static setValue() {

        const random = Math.random();

        document.getElementById("elementAttribute").value = `thisIsATest: ${random}`;

        document.getElementById("htmlAttribute")
            .setAttribute(`value`, `thisIsATest: ${random}`);

        document.getElementById("innerHtmlText")
            .textContent = `thisIsATest: ${random}`;

        document.getElementById("innerHtmlTextOfDiv")
            .textContent = `thisIsATest: ${random}`;

    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row><Col><h2>Inputs</h2></Col></Row>
                    <Row>
                        <Col data-test-id="LoginExampleRow1"><LoginExample test="1"/></Col>
                        <Col data-test-id="LoginExampleRow2"><LoginExample test="2"/></Col>
                    </Row>

                    <Row><Col><h2>Buttons</h2></Col></Row>
                    <Row>
                        <Col>
                            <Button color="danger" data-test-id="button">Danger!</Button>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row><Col><h2>Buttons with onclick events</h2></Col></Row>
                    <Row>
                        <Col>
                            <Button className={"align-middle"} onClick={App.setValue.bind()} color="primary"
                                    data-test-id="setElementsValueButton">Set elements value!</Button>
                            <div id="innerHtmlTextOfDiv" data-test-id="innerHtmlTextOfDiv">
                                Inner HTML Div: Nothing to display yet!
                            </div>
                            <div style={divStyle}>
                                <Row>
                                    <Label for="elementAttribute">Checkbox 1: </Label>
                                    <input
                                        data-test-id="checkbox1"
                                        name="isGoing"
                                        type="checkbox"/>
                                </Row>
                                <Row>
                                    <Label for="elementAttribute">Checkbox 2: </Label>
                                    <input
                                        data-test-id="checkbox2"
                                        name="isGoing"
                                        type="checkbox"/>
                                </Row>

                            </div>
                        </Col>
                        <Col>
                            <div style={divStyle}>
                                <Label for="elementAttribute">Set elements value attribute (element.value)</Label>
                                <Input type="text" name="elementAttribute" id="elementAttribute"
                                       data-test-id="elementAttribute"
                                       placeholder="element.value is set with click on button"/>

                                <Label for="htmlInitiallyAttributeSet">Set html attribute "value" on page set up</Label>
                                <Input type="text"
                                       name="htmlInitiallyAttributeSet"
                                       id="htmlInitiallyAttributeSet"
                                       data-test-id="htmlInitiallyAttributeSet"
                                       value="<tag value=''> html attribute is initially set"/>

                                <Label for="htmlAttribute">Set tags attribute "value" (&lt;tag
                                    value=''&gt;){this.props.test}</Label>
                                <Input type="text" name="htmlAttribute" id="htmlAttribute" data-test-id="htmlAttribute"
                                       placeholder="<tag value=''> html attribute is set with click on button"/>

                                <Label for="innerHtmlText">Set tags inner html
                                    (&lt;tag&gt;MyNewText&lt;/tag&gt;){this.props.test}</Label>
                                <Input type="text" name="innerHtmlText" id="innerHtmlText" data-test-id="innerHtmlText"
                                       placeholder="<tag>NewText</tag> innerHTML text is set with click on button"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                    <Row><Col><h2>Option List</h2></Col></Row>
                    <Row>
                        <Col>
                            <DropDownOptionList/>
                        </Col>
                        <Col>
                            <DropDownList>Test</DropDownList>
                        </Col>
                    </Row>
                    <Row><Col>
                        <h2>Hovers</h2>
                        <p>Hover over the image for additional information</p>
                    </Col></Row>
                </Container>
            </div>
        );
    }
}

export default App;