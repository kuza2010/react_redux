import React, {Component} from 'react';

import {Provider} from "react-redux";
import store from "../../store/store";

import Header from "../header";
import ItemList from "../item-list";


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Header title='Editor'/>
                    <ItemList/>
                </div>
            </Provider>
        )
    }
}

export default App;
