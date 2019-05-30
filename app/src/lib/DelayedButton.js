import {Component} from "react";
import {Button}    from "reactstrap";
import React       from "react";
import Label       from "reactstrap";
import Timer from "react-compound-timer";

export class DelayedButton extends Component {
    delayType = "";
    constructor(props) {
        super(props);

        this.delayType = props.delayType;
        if(props.delayType === "Appear") {
            this.state = {hidden: "hidden", description: `Appeared after ${this.props.wait / 1000} seconds`};
        } else if(props.delayType === "Disappear") {
            this.state = {hidden: "", description: `Disappears in `};
        } else if(props.delayType === "Enabled") {
            this.state = {disabled: true, description: "Enabled in "}
        } else if(props.delayType === "Disabled") {
            this.state = {disabled: false, description: "Disabled in "}
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.show();
        }, this.props.wait);
    }
    show() {
        if(this.delayType === "Appear") {
            this.setState({hidden : "", done: true});
        } else if(this.delayType === "Disappear") {
            this.setState({hidden : "hidden", done: true});
        } else if(this.delayType === "Enabled") {
            this.setState({disabled: false, done: true, description: `Enabled after ${this.props.wait / 1000} seconds`});
        } else if(this.delayType === "Disabled") {
            this.setState({disabled : true, done: true, description: `Disabled after ${this.props.wait / 1000} seconds`});
        }
    }
    render() {
        return (
            <div hidden={this.state.hidden} className="hidden">
                <Button disabled={this.state.disabled} color="info" data-test-id={this.delayType+"ButtonBy"+this.props.wait}>
                    {this.state.description + ""}
                    {!this.state.done && <Timer
                            initialTime={this.props.wait}
                            direction="backward">
                            {() => (
                                <React.Fragment>
                                    <Timer.Seconds /> seconds
                                </React.Fragment>
                            )}
                        </Timer>}
                </Button>
            </div>
        )
    }
}