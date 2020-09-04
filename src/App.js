import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomepageComponent from './components/HomepageComponent'
import HomepageComponent2 from './components/HomepageComponent2'

// Patient Pages
import PatientProfileComponent from './components/Patient/PatientProfileComponent'
import TestPageComponent from './components/Patient/TestPageComponent'
import ResultPage from './components/TestPages/ResultPage'
import ResourcesPageComponent from './components/Patient/ResourcePageComponent'

// HEALTH PROFESSIONAL PAGES
import HealthProfProfile from './components/HealthProfessional/HealthProfProfileComponent'
import PortalLogin from './components/HealthProfessional/PortalLoginComponent'
import ConsultRequestList from './components/HealthProfessional/ConsultRequestList'

// import Error from './components/error'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomepageComponent} exact />
            <Route path="/signup" component={HomepageComponent2} exact />
            <Route path="/profile" component={PatientProfileComponent} exact />
            <Route path="/professionalprofile" component={HealthProfProfile} exact />
            <Route path="/test" component={TestPageComponent} exact />
            <Route path="/results" component={ResultPage} exact />
            <Route path="/resources" component={ResourcesPageComponent} exact />
            <Route path="/portallogin" component={PortalLogin} exact />
            <Route path="/consultationrequests" component={ConsultRequestList} exact />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


