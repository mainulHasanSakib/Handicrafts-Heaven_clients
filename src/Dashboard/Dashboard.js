import React from 'react';
import { Button } from 'react-bootstrap';
import {
 
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from './MakeAdmin';
import AddProducts from '../Pages/AddProducts';
import MyOrder from './MyOrder';
import Payment from './Payment';
import useAuth from '../Hook/useAuth';
import AdminRoute from '../Pages/Log In/AdminRoute';
import Review from '../Pages/Log In/Review';


const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const {admin}= useAuth()
    return (
        <div className="container-fluid">
          <div className="row .d-flex">
            <div className="col-12 col-md-2">
<div className="bg-info vh-100 shadow-lg  ">
  <br/>
  <Link to='/home'><Button className="my-3" variant="danger">Home</Button></Link><br/>
{admin && <> <Link  to={`${url}/makeAdmin`}><Button className="my-3"  variant="danger">Make An Admin</Button></Link>
<br/>
<Link to={`${url}/addproducts`}><Button className="my-3" variant="danger">Add A Product</Button></Link></>}


  <br/>
  <Link to={`${url}/myorder`}><Button className="my-3" variant="danger">My Order</Button></Link><br/>
  <Link to={`${url}/payment`}><Button className="my-3" variant="danger">Payment</Button></Link><br/>
  <Link to={`${url}/review`}><Button className="my-3" variant="danger">Review</Button></Link><br/>
  <Link to={`${url}`}><Button className="my-3 " variant="danger">DashBoard</Button></Link>
  </div>
</div>
<div className="col-12 col-md-10">
<div className="col-12">
                            <h2 className="fw-bold my-5">
                          WELCOME TO DASHBOARD!!!
                            </h2>
                            </div>
  <Switch>
        
        
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </AdminRoute>
        <Route path={`${path}/myorder`}>
          <MyOrder />
        </Route>
        <AdminRoute path={`${path}/addproducts`}>
        <AddProducts></AddProducts>
          </AdminRoute>
      </Switch>
      
</div>
            
            
            
           
          </div>

          
        </div>
    );
};

export default Dashboard;