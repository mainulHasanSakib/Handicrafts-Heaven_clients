import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";

import './App.css';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Log In/Login";
import Register from "./Pages/Log In/Register";





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
<Switch>
  <Route exact path="/">
<Home/>
  </Route>
  <Route exact path="/home">
<Home/>
</Route>
  <Route exact path="/login">
<Login/>
</Route>
  <Route exact path="/register">
<Register/>
</Route>



</Switch>
</Router>
      </AuthProvider>
</div>
  );
}

export default App;