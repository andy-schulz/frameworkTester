import React, { Component}          from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import TestTable                    from "../lib/TestTable";

class Tables extends Component {
    render() {
        return (
            <div className="Tables">
                <Container>
                    <Row><Col><h2>a Simple Table</h2></Col></Row>
                    <Row>
                        <Col>
                            <TestTable></TestTable>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Tables;