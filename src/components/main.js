import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Header from './Header';
import Quote from './Quote';
import QuotesContainer from './QuotesContainer';

const Main = (props) => {
    console.log('Main');
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/quote/:id" component={Quote} />
                <Route path="/" component={QuotesContainer}/>
            </Switch>
        </Router>
    );
}
export default Main;