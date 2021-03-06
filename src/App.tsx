import React, {Component} from "react";

import {MyChatBot} from "./_components/index";
import './App.css';
import {Hello, Counter, Clock, Kitty} from "./_components";
import {Home} from "./pages";

import {ConnectedRouter} from 'connected-react-router'

class App extends Component<any, any> {
    public comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
    }

    public render() {
        return (<div><Home/></div>)

    };
}

export default App;