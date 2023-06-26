import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProductList from "./components/products.js";

const App = () => {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/">
            <ProductList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
};

export default App;