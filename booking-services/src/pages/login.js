import LoginForm from '../component/login-form';
import logo from '../assets/logo-brimo.png';

function Login() {
    return (
        <div>
            <img src={logo} className="login-logo" alt="Brimo"/>
            <div className="auth-wrapper">
                <div className="auth-inner">
                  <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;