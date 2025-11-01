import './sass/app.scss';
import AppRoutes from './routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const App: React.FC = () => {

  return (
    <Router>
      <AppRoutes />
    </Router >
  )
}

export default App;
