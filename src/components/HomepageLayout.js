
import React from 'react'

import { Route } from "react-router-dom";


import ResponsiveContainer from './HomepageContainer/ResponsiveContainer';

import Home from './HomepageContent/Home/Home';
import Public from "./HomepageContent/Public/Public";
import Protected from "./HomepageContent/Protected/Protected";
import Login from "./HomepageContent/Login/Login";
import Register from "./HomepageContent/Register/Register";

import HomepageFooter from './HomepageFooter/HomepageFooter';

import PrivateRoute from '../service/PrivateRoute';


const HomepageLayout = () => (
  <ResponsiveContainer>

    <Route exact path="/" component={Home} />

    <Route path="/public" component={Public} />

    <Route path="/login" component={Login} />

    <Route path="/register" component={Register} />


    <PrivateRoute path="/protected" component={Protected} />



    <HomepageFooter/>

  </ResponsiveContainer>
);

export default HomepageLayout