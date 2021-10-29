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

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>
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
    </div>
  );
}

export default App;
