import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Registration from './components/Authentication/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/Authentication/LogIn/LogIn';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import Upgrade from './components/Upgrade/Upgrade';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/upgrade">
              <Upgrade></Upgrade>
            </Route>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
