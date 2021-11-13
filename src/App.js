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
import AddProducts from "./Pages/AddProducts";
import AllProduct from "./Pages/AllProduct";
import Order from "./Order";
import PrivateRoute from "./Pages/Log In/PrivateRoute";





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
  <Route exact path="/addProduct">
<AddProducts/>
</Route>
  <Route exact path="/allProduct">
<AllProduct/>
</Route>
  <PrivateRoute exact path="/order/:orderId">
<Order/>
</PrivateRoute>
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