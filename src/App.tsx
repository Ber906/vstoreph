import { Switch, Route } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-6xl font-black text-gray-200 mb-4">404</h1>
            <a href="/" className="text-blue-600 font-semibold hover:underline">Go back home</a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
