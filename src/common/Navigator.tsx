import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom';
import routerConfig from "../utils";

export default class Navigator extends Component<any, any> {
    public render() {
        return (<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    <p><span className="glyphicon glyphicon-home"/></p></a>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/chat">챗봇</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/counter">카운터</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/hello">Hello</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/clock">Clock</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><Link to="/kitty">Kitty</Link></a>
                    </li>

                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Dropdown link
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </li>*/}
                </ul>
            </nav>


        )
    }

}