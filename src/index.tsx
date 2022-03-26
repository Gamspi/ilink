import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Core from './Core/Core';
import {store} from "./Core/redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
            <Core/>
    </Provider>
  ,  document.getElementById('root')
);

