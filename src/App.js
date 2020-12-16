import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { AppHeader } from "./AppHeader";
import { AuthProvider } from "./Auth";
import { HomePage } from './HomePage';
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { SettingsPage } from "./SettingsPage";
import { Tags } from "./Tags";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={HomePage, Tags} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/settings" component={SettingsPage} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
