import hero from '../assets/hero-brimo.jpg';

export default function Hero() {
    return (
        <img src={hero} className="account-hero" alt="Hero Brimo" loading="lazy" />
    )
}