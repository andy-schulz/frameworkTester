import React from "react";
import {Component} from "react";
import { Form, FormGroup, Label, Input} from 'reactstrap';

export class LoginExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email{this.props.test}</Label>
                    <Input type="email" name="email" id="exampleEmail" data-test-id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" data-test-id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
            </Form>
        )
    }
}