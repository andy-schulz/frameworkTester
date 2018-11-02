import {Component} from "react";
import {Button} from "reactstrap";
import React from "react";

export class DelayedButton extends Component {

    constructor(props) {
        super(props);
        this.state = {hidden: "hidden"};
    }

    componentWillMount() {
        setTimeout(() => {
            this.show();
        }, this.props.wait);
    }
    show() {
        this.setState({hidden : ""});
    }
    render() {
        return (
            <div hidden={this.state.hidden} className="hidden">
                <Button color="info" data-test-id={"DelayedButtonBy"+this.props.wait}>Waited {this.props.wait / 1000} Seconds </Button>
            </div>
        )
    }
}