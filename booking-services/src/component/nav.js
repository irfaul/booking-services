import logo from '../assets/logo-brimo.png';

export default function Nav() {
    return (
        <nav className="navbar sticky-top justify-content-center">
            <a className="navbar-brand" href="/bpba/home">
                <img src={logo} className="account-logo" alt="Brimo" loading="lazy" />
            </a>
        </nav>
    )
}