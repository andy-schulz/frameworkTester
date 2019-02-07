import {Component} from "react";
import {Button} from "reactstrap";
import React from "react";
import Label from "reactstrap";

export class DelayedButton extends Component {
    delayType = "";
    constructor(props) {
        super(props);

        this.delayType = props.delayType;
        if(props.delayType === "Appear") {
            this.state = {hidden: "hidden"};
        } else if(props.delayType === "Disappear") {
            this.state = {hidden: ""};
        } else {

        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.show();
        }, this.props.wait);
    }
    show() {
        if(this.delayType === "Appear") {
            this.setState({hidden : ""});
        } else if(this.delayType === "Disappear") {
            this.setState({hidden : "hidden"});
        }
    }
    render() {
        return (
            <div hidden={this.state.hidden} className="hidden">
                <Button color="info" data-test-id={this.delayType+"ButtonBy"+this.props.wait}>{this.delayType} in {this.props.wait / 1000} Seconds </Button>
            </div>
        )
    }
}