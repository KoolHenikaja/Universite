import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Enseignants from './pages/Enseignants/Enseignants';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from './pages/Spinner/Spinner';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    fakeDataFetch();
  }, [])

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return  (
      <div>
        <Navbar expand='lg' className='position-absolute w-100'>
          <Container>
            <Navbar.Brand>
              <Link to="/" className='navbar-brand d-flex align-items-center'>
              <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-backpack2-fill" viewBox="0 0 16 16">
                 <path d="M5 13h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5z"/>
                 <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v1.191l-1.17.585A1.5 1.5 0 0 0 0 11.118V13.5A1.5 1.5 0 0 0 1.5 15h1c.456.607 1.182 1 2 1h7c.818 0 1.544-.393 2-1h1a1.5 1.5 0 0 0 1.5-1.5v-2.382a1.5 1.5 0 0 0-.83-1.342L14 9.191V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
              </svg>
              <span data-aos="fade-right" className='mx-2 text-light lh-1 fw-semibold'>
                React
                <br></br>
                Université
                <br></br>
                Madagascar
              </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" 
            className="bg-light" />
            <Navbar.Collapse id='basic-navbar-nav'>
               <Nav className='me-auto justify-content-end w-100'>
                <Nav.Link href='/' className='text-uppercase' data-aos="fade-down">Acceuil</Nav.Link>
                <Nav.Link href='/courses' className='text-uppercase' data-aos="fade-up">Nos Formations</Nav.Link>
                <Nav.Link href='/enseignants' className='text-uppercase' data-aos="fade-down">Nos Enseignants</Nav.Link>
                <Nav.Link href='/about' className='text-uppercase'data-aos="fade-up">A Propos</Nav.Link>
                <Nav.Link href='/blog' className='text-uppercase'data-aos="fade-down">Blog</Nav.Link>
                <Nav.Link href='/contact' className='text-uppercase'data-aos="fade-up">Entrer en Contact</Nav.Link>
               </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {loading ? (
          <Spinner />
        ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/enseignants' element={<Enseignants />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
         )}
        <footer>
          <div className='container my-5'>
            <div className='row d-flex justify-content-between 
            align-items-center'>
              <div className='col-md-4'>
                <Link to='/contact'>
                  <button data-aos="fade-down" type='button' className='btn btn-outline-danger
                  btn-lg mb-5 mb-md-4'>Entrer en Contact</button>
                </Link>
                <ul className='footer-social-icons list-unstyled d-flex
                justify-content-between'>
                <Link to='/contact'>
                  <li>
                  <svg data-aos="fade-right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                  </li>
                </Link>
                <Link to='/contact'>
                  <li>
                  <svg data-aos="fade-up" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                  </li>
                </Link>
                <Link to='/contact'>
                  <li>
                  <svg data-aos="fade-up" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                  </li>
                </Link>
                <Link to='/contact'>
                  <li>
                  <svg data-aos="fade-left" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" class="bi bi-threads" viewBox="0 0 16 16">
                     <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
                  </svg>
                  </li>
                </Link>
                </ul>
              </div>
              <div className='col-md-7 col-lg-6'>
                <div className='d-row d-md-flex justify-content-between
                align-items-center'>
                  <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4
                  my-md-0'>
                    <ul className='footer-navigation list-unstyled mb-0'>
                      <Link to='/' className='text-decoration-none
                      text-danger'>
                        <li className='text-uppercase fw-semibold' data-aos="fade-down">Acceuil</li>
                      </Link>
                      <Link to='/courses'  className='text-decoration-none
                      text-danger' >
                        <li className='text-uppercase fw-semibold' data-aos="zoom-in">Nos Formations</li>
                      </Link>
                      <Link to='/enseignants'  className='text-decoration-none
                      text-danger' >
                        <li className='text-uppercase fw-semibold' data-aos="zoom-in">Nos Enseignants</li>
                      </Link>
                      <Link to='/about' className='text-decoration-none
                      text-danger' >
                        <li className='text-uppercase fw-semibold' data-aos="zoom-in">A Propos</li>
                      </Link>
                      <Link to='/blog'  className='text-decoration-none
                      text-danger' >
                        <li className='text-uppercase fw-semibold' data-aos="zoom-in">Blog</li>
                      </Link>
                      <Link to='/contact' className='text-decoration-none
                      text-danger'>
                        <li className='text-uppercase fw-semibold' data-aos="fade-up">Entrer en Contact</li>
                      </Link>
                    </ul>
                  </div>
                  <div className='col-12 col-md-6 col-lg-7'>
                    <ul data-aos="fade-left" className='list-unstyled mb-0'>
                      <li>
                        <p>Adresse - REACT_UNIV, Antananarivo 101</p>
                      </li>
                      <li>
                        <p>Téléphone - 0387656786</p>
                      </li>
                      <li>
                        <p>Email - reactuniv@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-body-tertiary'>
            <div className='container'>
              <p className='p-3 m-0 text-center'>CopyRight Reserved @ made by React_Univ.com</p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App
