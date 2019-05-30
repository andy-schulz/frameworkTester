import React, { Component}                  from 'react';
import Modal                                from "react-responsive-modal";
import Timer                                from "react-compound-timer";
import {Container, Row, Col, Label, Button} from 'reactstrap';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "100%",
    height: "100%",
    size: "absolute",
};

class ModalsPage extends Component {

    constructor(props) {
        super(props);
        this.disappear = props.disappear;
    }

    state = {
        open: true
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.id = setTimeout(() => this.setState({ open: false }), 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        const { open } = this.state;
        return <div style={styles}>
            <Container>

                <Row><Col><h2>Click Element behind Modal</h2></Col></Row>
                <Row><Col><Button color="danger" className={"buttonBehindModal"} data-test-id="buttonBehindModal">Danger!</Button></Col></Row>

                <Row>
                    <Col>
                        <Modal modalId="ModalView" open={open} onClose={this.onCloseModal} center>
                            <h1>react-responsive-modal</h1>
                            <p>
                                This modal will disappear in <Timer
                                initialTime={this.disappear}
                                direction="backward">
                                {() => (
                                    <React.Fragment>
                                        <Timer.Seconds /> seconds
                                    </React.Fragment>
                                )}
                            </Timer>
                            </p>
                        </Modal>
                    </Col>
                </Row>
            </Container>

        </div>

    }
}
export default ModalsPage;