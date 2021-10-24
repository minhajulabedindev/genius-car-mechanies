import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/AddService/ManageServices";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Notfoun from "./Pages/Notfound/Notfoun";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Header from "./Pages/Shared/Header/Header";
// import Service from "./Pages/Service/Service";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manage">
              <ManageServices></ManageServices>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <Notfoun></Notfoun>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
