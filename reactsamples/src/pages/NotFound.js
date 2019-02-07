import React, { Component} from 'react';
import './css/style_not_found.css';
import {Jumbotron, Button}         from "reactstrap";
class NotFound extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div id="notfound">
                        <div className="notfound">
                            <div className="notfound-404">
                                <h1>404</h1>
                            </div>
                            <h2>Oops! This Page Could Not Be Found</h2>
                            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is
                                temporarily unavailable</p>
                            <Button href="/#">Go To Homepage</Button>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default NotFound;