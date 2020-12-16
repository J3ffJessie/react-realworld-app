import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { AppHeader } from "./AppHeader";
import { AuthProvider } from "./Auth";
import { HomePage } from './HomePage';
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { SettingsPage } from "./SettingsPage";
import { Editor } from "./editor";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/settings" component={SettingsPage} />
            <PrivateRoute path="/editor" component={Editor} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
