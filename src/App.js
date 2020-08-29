import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// Patient Pages
import HomepageComponent from './components/HomepageComponent'
import PatientProfileComponent from './components/Patient/PatientProfileComponent'
import TestPageComponent from './components/Patient/TestPageComponent'
import ResourcesPageComponent from './components/Patient/ResourcePageComponent'

// HEALTH PROFESSIONAL PAGES
import HealthProfProfile from './components/HealthProfessional/HealthProfProfileComponent'
import PortalLogin from './components/HealthProfessional/PortalLoginComponent'
import ConsultRequestList from './components/HealthProfessional/ConsultRequestList'

// TEST PAGES
// import TestPage1 from './components/TestPages/Test1';
// import TestPage2 from './components/TestPages/Test2';
// import TestPage3 from './components/TestPages/Test3';
// import TestPage4 from './components/TestPages/Test4';
// import TestPage5 from './components/TestPages/Test5';
// import TestResult from './components/TestPages/ResultPage';

// import Error from './components/error'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomepageComponent} exact />
            <Route path="/profile" component={PatientProfileComponent} exact />
            <Route path="/professionalprofile" component={HealthProfProfile} exact />
            <Route path="/test" component={TestPageComponent} exact />
            <Route path="/resources" component={ResourcesPageComponent} exact />
            <Route path="/portallogin" component={PortalLogin} exact />
            <Route path="/consultationrequests" component={ConsultRequestList} exact />

            {/* <Route path="/page1" component={TestPage1} exact />
            <Route path="/page2" component={TestPage2} exact />
            <Route path="/page3" component={TestPage3} exact />
            <Route path="/page4" component={TestPage4} exact />
            <Route path="/page5" component={TestPage5} exact />
            <Route path="/results" component={TestResult} exact /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


