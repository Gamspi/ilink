import React, {createContext} from 'react';
import './Core.scss';
import Layout from "./layouts/Layout";
import {user} from "./constants/user";

export const newContext = createContext(user)

function Core() {

  return (
    <div className="Core">
        <newContext.Provider value={user}>
            <Layout/>
        </newContext.Provider>
    </div>
  );
}

export default Core;
