import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Suspense from "./components/Suspense";
import { appRoutes } from "./routes-config/App.routes";
import Header from "./components/Header";
import { SocialProvider } from "./context/SocialContext";
import NotFound from "./pages/NotFound";
import { Container } from "./components/styled";

function App() {
  return (
    <>
      <Suspense>
        <Router>
          <Header />
          <SocialProvider>
            <Container>
              <Switch>
                {Object.values(appRoutes()).map(
                  ({ path, exact, component: Component }, index) => (
                    <Route exact={exact} path={path} key={index}>
                      <Component />
                    </Route>
                  )
                )}
                <Route path="/" exact>
                  <Redirect to="/home" />
                </Route>
                <Route component={NotFound} />
              </Switch>
            </Container>
          </SocialProvider>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
