import Main from './pages/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


function App() {

  return (
    <Router basename="/albums">
    <Main />
  </Router>
  );
}

export default App;
