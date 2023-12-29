import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CredientialsProvider from "./components/store/CredientialsProvider";
import CredientialsContext from "./components/store/credientialsContext";

function App() {
  const credCtx = useContext(CredientialsContext);

  return (
    <CredientialsProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/profile">
            {credCtx.isLoggedIn && <ProfilePage />}
            {!credCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>

          {!credCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </CredientialsProvider>
  );
}

export default App;
