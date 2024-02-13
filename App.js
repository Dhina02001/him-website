import Home from './PAGES/Home';
import Services from './PAGES/Services';
import Contect from './PAGES/Contect';
import './App.css';
import About from './PAGES/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from 'react-router-dom';
import Login from './PAGES/Login';
import Register from './PAGES/Register';

function App() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary fs-2">
        <form class="container-fluid justify-content-center">
          <img src='https://www.nithra.mobi/assets/images/nithra_logo_1.svg' alt='2' ></img>
        </form>
      </nav>
      <nav class="navbar">
        {" "}
        <div class="d-flex justify-content-start">
          {"  "}
          <a class="a1" href=' ' alt="button"><button type="button" class="btn btn-primary me-5">
            <Link class="a1" to="/Home">Home</Link>
          </button></a>
          <a class="a1" href=' ' alt="button"><button type="button" class="btn btn-success me-5">
            <Link class="a1" to="/Services">Services</Link>
          </button></a>
          <a class="a1" href=' ' alt="button"><button type="button" class="btn btn-warning me-5">
            <Link class="a1" to="/About">About</Link>
          </button></a>
          <a class="a1" href=' ' alt="button"><button type="button" class="btn btn-dark me-5">
            <Link class="a1" to="/Contect">Contect As</Link>
          </button></a>
        </div>
        <form class="d-flex" role="search">
          <Link to="/Login"><a href=' ' class='me-5'><img src='https://cdn-icons-png.flaticon.com/128/295/295128.png' alt='2' width={35} /></a></Link>
        </form>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
