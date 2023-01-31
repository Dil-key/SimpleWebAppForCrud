import React from 'react';
import {BrowserRouter as Router, Switch, Route}from "react-router-dom";
import AddPastUser from './AddPastUser';
import AddProfit from './AddProfit';
import Adduser from './Adduser';
import Home from './Home';
import Life from './Life';
import Motor from './Motor';
import Pastuser from './Pastuser';
import Property from './Property';
import UpdateUser from './UpdateUser';
import ViewProfit from './ViewProfit';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/adduser" component={Adduser}/>
        <Route path="/life" component={Life} />
        <Route path="/motor" component={Motor} />
        <Route path="/property" component={Property} />
        <Route path="/past" component={Pastuser} />
        <Route path="/addPastUser" component={AddPastUser} />
        <Route path="/updateUserForm/:userNo" component={UpdateUser} />
        <Route path="/addProfit" component={AddProfit} />
        <Route path="/getProfit" component={ViewProfit} />
       </Switch>
    </Router>
  )
}
export default App;
