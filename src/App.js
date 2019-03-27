import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home'
import Reports from './Components/Reports/Reports';
import Header from './Components/layout/Header';
import SignIn from './Components/Registration/Signin';
import AddReport from './Components/Reports/AddReport';
import EditReport from './Components/Reports/EditReport';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

import { Provider } from './context';
import './assets/bootstrap.min.css';
import './assets/style.css'

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/reports" component={Reports} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/signin" component={SignIn} />
                                <Route exact path="/reports/create" component={AddReport} />
                                <Route exact path="/reports/edit/:id" component={EditReport} />                                
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;