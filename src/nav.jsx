import { Link, useLocation } from "react-router-dom";
import logo from "./assets/react.svg";
export default function Nav() {
  const location = useLocation();
  return (
    <>  
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
I      <image src={logo} />
        <span className="fs-4">Lucky</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Token</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Roadmap</a></li>
      </ul>
    </header>
  </>
  );
}
