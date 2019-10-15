import React, {Component}                                                               from "react";
import ReactDOM                                                                         from "react-dom";
import {DragDropContext, Droppable, Draggable}                                          from "react-beautiful-dnd";
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";

class PointerActions extends Component {
    constructor(props) {
        super(props);
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <div><h1>User Icon</h1></div>
                            <div data-test-id="user-icon-no-hover" className="user-icon fas fa-user" style={{fontSize: '3em'}}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div><h1>Show user information in hover</h1></div>
                            <div data-test-id="usericon" className="hover-me fas fa-user" style={{fontSize: '3em'}}/>
                            <div className="my-hover-info">
                                <h5 data-test-id="hoverusername">Name: User Name</h5>
                                <div>B-day: 01.01.1970</div>
                                <a href="/users/">View User Information</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PointerActions