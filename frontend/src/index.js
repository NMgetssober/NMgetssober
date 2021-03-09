import ReactDOM from 'react-dom'
import {App} from "./ui/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "@reduxjs/toolkit"

ReactDOM.render(App(), document.querySelector('#root'));