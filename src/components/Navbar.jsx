import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand">Megumi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='about' className="nav-link">About</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link to='works' className="nav-link">Works</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='contact' className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}