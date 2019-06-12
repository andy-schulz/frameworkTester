import React, { Component}          from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import TestTable                    from "../lib/TestTable";
import LargeTable                   from "../lib/LargeTable";
import './css/tables.css';

class Tables extends Component {
    render() {
        return (
            <div className="Tables">
                <Container>
                    <Row><Col><h2 className="tableheadline">a Simple Table</h2></Col></Row>
                    <Row>
                        <Col>
                            <TestTable></TestTable>
                        </Col>
                    </Row>
                    <Row><Col><h2 className="tableheadline">a Large Table</h2></Col></Row>
                    <Row>
                        <Col>
                            <LargeTable></LargeTable>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Tables;