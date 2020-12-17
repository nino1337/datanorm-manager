import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map(({ route }) => {
          return (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </Layout>
  );
}

export default App;
