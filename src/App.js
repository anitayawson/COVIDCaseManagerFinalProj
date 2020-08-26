import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import HomepageComponent from './components/HomepageComponent'
import PatientProfileComponent from './components/PatientProfileComponent'
import TestPageComponent from './components/TestPageComponent'
import ResourcesPageComponent from './components/ResourcePageComponent'
import Sidebar from './components/sidebar'

import './App.css';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomepageComponent} exact />
            <Route path="/profile" component={PatientProfileComponent} exact />
            <Route path="/test" component={TestPageComponent} exact />
            <Route path="/resources" component={ResourcesPageComponent} exact />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// import React from 'react'

// export default function App() {
//   return (
//         <div>
//           {/* <HomepageComponent /> */}
//           <PatientProfileComponent />
//           {/* <TestPageComponent /> */}
//           {/* <ResourcesPageComponent /> */}
//         </div>
//   )
// }


