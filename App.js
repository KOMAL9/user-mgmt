import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./AddUser";
import Header from "./Header";
import Login from "./Login";
import ManageUser from "./ManageUser";

function App() {
  return (
   
   <Router>

   <Header props={}/>
   
   <Switch>

   <Route
            path="/"
            exact
            render={() => (
              <Login
                
              />
            )}
          />

<Route
            path="/AddUser"
            exact
            render={() => (
              <AddUser
               
              />
            )}
          />

<Route
            path="/ManageUser"
            exact
            render={(props) => (
              <ManageUser
                {...props}
                id={id}
                username={username}
                email={email}
                role={role}
              />
            )}
          />
     </Switch>




   </Router>
  );
}

export default App;
