import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Book from './components/Dashboard/Book/Book';
import Review from './components/Dashboard/Review/Review';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddService from './components/Admin/AddService/AddService';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/dashboard/book/:serviceId'>
            <Book></Book>
          </PrivateRoute>
          <Route path='/dashboard/bookingList'>
            <BookingList></BookingList>
          </Route>
          <Route path='/dashboard/review'>
            <Review></Review>
          </Route>
          <Route path='/admin/addService'>
            <AddService></AddService>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
