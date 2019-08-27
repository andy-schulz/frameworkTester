import React                                    from 'react';
import ReactDOM                                 from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import App                                  from './App';
import DelayedElements                      from './pages/DelayedElements';
import Tables                               from './pages/Tables';
import NotFound                             from './pages/NotFound';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import * as serviceWorker                   from './serviceWorker';

import FrameElement  from "./pages/frames/FrameElement";
import Frame1        from './pages/frames/Frame1';
import Frame2        from "./pages/frames/Frame2";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import FrameElement2 from "./pages/frames/FrameElement2";
import RedirectPage  from "./pages/RedirectPage";
import ModalsPage    from "./pages/ModalsPage";
import DragNDrop     from "./pages/DragNDrop";




const routing = (
    <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="">
                            <NavIcon>
                                <i className="fas fa-user-edit" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Basic Elements
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="delayed">
                            <NavIcon>
                                <i className="fas fa-clock" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Delayed Elements
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="tables">
                            <NavIcon>
                                <i className="fas fa-th" style={{ fontSize: '1.75em' }}/>

                            </NavIcon>
                            <NavText>
                                Tables & Grids
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="nestedFrames">
                            <NavIcon>
                                <i className="fas fa-window-restore" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Frames
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="redirectToDelayed">
                            <NavIcon>
                                <i className="fas fa-sign-in-alt" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Redirect
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="redirectToFrames">
                            <NavIcon>
                                <i className="fas fa-box-open" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Redirect
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="modals">
                            <NavIcon>
                                <i className="fas fa-object-group" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Modals
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="dragndrop">
                            <NavIcon>
                                <i className="fas fa-grip-vertical" style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                DragNDrop
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <main>
                    <Switch>
                        <Route path="/" exact component={props => <App />} />
                        <Route path="/tables" component={props => <Tables />} />
                        <Route path="/delayed" component={props => <DelayedElements />} />

                        <Route path="/frameelement" component={props => <FrameElement />} />
                        <Route path="/frameelement2" component={props => <FrameElement2 />} />
                        <Route path="/nestedFrame2" component={props => <Frame2 />} />
                        <Route path="/nestedFrames" component={props => <Frame1 />} />
                        <Route path="/redirectToDelayed" component={props => <RedirectPage redirectTime={5000} redirectTarget={"/delayed"}/>} />
                        <Route path="/redirectToFrames" component={props => <RedirectPage redirectTime={5000}  redirectTarget={"/nestedFrames"}/>} />
                        <Route path="/modals" component={props => <ModalsPage disappear ={5000}/>} />
                        <Route path="/dragndrop" component={props => <DragNDrop/>} />
                        <Route component={props => <NotFound />} />
                    </Switch>
                </main>
            </React.Fragment>
        )}
        />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
