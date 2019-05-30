import React, {Component}                                from 'react';
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';

import {library}                                                                         from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon}                                                                 from '@fortawesome/react-fontawesome'
import {
    faStroopwafel, faEyeDropper, faCoffee, faCookie,
    faCookieBite, faTable, faClock
}                                                                                        from '@fortawesome/free-solid-svg-icons'
import {faDropbox}                                                                       from '@fortawesome/free-brands-svg-icons'
import {Link}                                                                            from "react-router-dom";

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

library.add(faEyeDropper, faCoffee, faDropbox, faStroopwafel, faCookie, faCookieBite, faTable, faClock);


export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }
    render() {
        return (
            <SideNav
                onSelect={(selected) => {

                }}
            >
                <div>

                </div>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/">
                            <FontAwesomeIcon icon="cookie-bite" size="2x" color="white"/>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </Link>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="tables">
                        <NavIcon>
                            <Link to="/tables">
                                <FontAwesomeIcon icon="table" size="2x" color="white"/>
                                <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                            </Link>
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="delayed">

                            <NavIcon>
                                <Link to="/delayed">
                                    <FontAwesomeIcon icon="clock" size="2x" color="white"/>
                                    <i className="fa fa-fw" style={{ fontSize: '1.75em' }} />
                                </Link>
                            </NavIcon>
                            <NavText>
                                Delaed Items
                            </NavText>


                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}
