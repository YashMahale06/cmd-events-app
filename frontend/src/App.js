import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
