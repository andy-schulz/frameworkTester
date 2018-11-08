import React from "react";
import {Component} from "react";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import { Form, FormGroup, Label, Input} from 'reactstrap';

export class DropDownList extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <ButtonDropdown id="buttonDropDown" isOpen={this.state.dropdownOpen} toggle={this.toggle} data-test-id="buttonDropDown">
                <Label for="buttonDropDown">ButtonDropDown</Label>
                <DropdownToggle caret>
                    Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export class DropDownOptionList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
            </Form>
        )
    }
}