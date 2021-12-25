import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore/Explore';
import BikeDetails from './Pages/Explore/Bike/Bike/Bike';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setBikes, setReviews } from './redux/actions';
import { useEffect } from 'react';

function App() {

  const user = useSelector((state) => state?.firebaseReducer?.firebase);
  const bikes = useSelector((state) => state.bikesReducer.bikes);
  const reviews = useSelector((state) => state.reviewsReducer.reviews);
  const orders = useSelector((state) => state.ordersReducer.orders);
  const dispatch = useDispatch();

  // Fetching Bikes
  const fetchBikes = async () => {
    const response = await axios
      .get("https://pacific-oasis-02900.herokuapp.com/bikes/")
      .catch((err) => {
        console.error("Err: ", err);
      });
    dispatch(setBikes(response.data));
  };
  useEffect(() => {
    fetchBikes();
  }, [bikes]);


  // Fetching Reviews
  const fetchReviews = async () => {
    const response = await axios
      .get('https://pacific-oasis-02900.herokuapp.com/reviews')
      .catch((err) => {
        console.error("Eerror ", err);
      });
    dispatch(setReviews(response.data))
  }

  useEffect(() => {
    fetchReviews();
  }, [reviews])


  // Fetching Orders
  const fetchOrders = async () => {
    const response = await axios
      .get('https://pacific-oasis-02900.herokuapp.com/allOrders')
      .catch((err) => {
        console.error("Eerror ", err);
      });
    dispatch(setReviews(response.data))
  }
  useEffect(()=>
  {
    fetchOrders();
  },[orders])

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/bikeDetails/:bikeID">
              <BikeDetails></BikeDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
