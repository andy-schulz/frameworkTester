import React, { Component}          from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import {Redirect}                   from "react-router-dom";
import Timer                        from "react-compound-timer";
import Clock                        from "./DelayedElements";

class RedirectPage extends Component {

    redirectTime = 0;
    constructor(props) {
        super(props);
        this.redirectTime = props.redirectTime;
    }


    state = {
        redirect: false
    }

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), this.redirectTime)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return this.state.redirect
            ? <Redirect to="/delayed" />
            : <Container>

                <Row><Col><h2>Redirect to Page</h2></Col></Row>
                <Row>
                    <Col>
                        <div> Redirect in <Timer
                                initialTime={this.redirectTime}
                                direction="backward">
                                {() => (
                                    <React.Fragment>
                                        <Timer.Seconds /> seconds
                                    </React.Fragment>
                                )}
                            </Timer>
                        </div>
                    </Col>
                </Row>
        </Container>

    }
}
export default RedirectPage;