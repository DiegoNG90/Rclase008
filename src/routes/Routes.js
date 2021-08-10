import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {lazy, Suspense} from 'react'

import Loading from '../components/Loading/Loading'
const Tickets = lazy(() => import("../Pages/Tickets/Tickets")) // carga a demanda
const Home = lazy(()=> import("../Pages/Home/Home")) // carga a demanda

const Routes = () => {
    return (
      <Router>
        <Suspense fallback={<Loading />}>  {/* ¨podira ser un componente Spinner! */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/tickets">
              <Tickets />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    );
}

export default Routes;