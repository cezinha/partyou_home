import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';

const Home = lazy(() => import('./Home'));
const Funcionalidades = lazy(() => import('./Funcionalidades'));
const Sobre = lazy(() => import('./Sobre'));
const Login = lazy(() => import('./Login'));
const Layout = lazy(() => import('./Layout'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { pathname } = window.location;
  return (
    <div className={`page ${pathname.replace('/', '')}`}>
      <Router>
        <Suspense fallback={<SplashScreen />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/layout" component={Layout} />
            <Route path="/funcionalidades" component={Funcionalidades} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/login" component={Login} />
          </Switch>
          {(pathname !== "/login") ? <Footer /> : null}
        </Suspense>
      </Router>
    </div>
  );
}

function SplashScreen() {
  return (
    <div className="splash-screen"></div>
  );
}

export default App;
