import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from "../pages";
import {Clock, Counter, Hello, Kitty, MyChatBot} from "../components";
import AdvancedCounter from "../components/fp/AdvancedCounter";

const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home"/>
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/chat',
        component : MyChatBot
    },
    {
        path: '/hello',
        component : Hello
    },
    {
        path: '/clock',
        component : Clock
    },
    {
        path: '/kitty',
        component : Kitty
    },
    {
        path: '/counter',
        component : AdvancedCounter
    }
]
export default routerConfig