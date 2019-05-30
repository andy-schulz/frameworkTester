import React, { Component}                  from 'react';
import {Container, Row, Col, Label, Button} from 'reactstrap';
import {DelayedButton}                      from "../lib/DelayedButton";
import Clock                                from 'react-live-clock';

class DelayedElements extends Component {
    render() {
        return (
            <div className="DelayedElements">
                <Container>
                    <Row><Col><h2><Clock format={'dddd, MMMM DD, YYYY, HH:mm:ss A'} ticking={true} timezone={'Europe/Berlin'} /></h2></Col></Row>

                    <Row><Col><h2>Elements that appear or disappear</h2></Col></Row>
                    <Row><Col><h3>Delayed Buttons</h3></Col></Row>
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
                            <DelayedButton delayType="Disappear" wait={10000} />
                        </Col>
                    </Row>
                    <Row><Col><h3>Disabled Buttons</h3></Col></Row>
                    <Row>
                        <Col>
                            <Label>enable button after 5 Seconds</Label>
                        </Col>
                        <Col>
                            <DelayedButton delayType="Enabled" wait={5000}/>
                        </Col>
                        <Col>
                            <DelayedButton delayType="Disabled" wait={5000}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default DelayedElements;