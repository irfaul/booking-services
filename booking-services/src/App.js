import './App.css';
import './style/bootstrap.min.css';
import logo from './assets/logo-brimo.png';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="Brimo"/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
