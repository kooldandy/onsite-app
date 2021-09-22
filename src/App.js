import { Login } from './app/modules/login/Login';
import { Signup } from './app/modules/signup/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Login></Login>
      </div>

      <div>
        <Signup></Signup>
      </div>
    </div>
  );
}

export default App;
