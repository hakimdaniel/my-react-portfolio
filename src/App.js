import React from 'react';
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function Home(){
  return (
    <div className='container p-5'>
      <h1>Welcome to my website</h1>
      <p>Website ini dibuat dengan teknologi react js.</p>
    </div>
  )
}

function About(){
  return (
    <div className='container p-5'>
    <h1><span className='badge text-bg-primary'>About me</span></h1>
    <p>Nama saya Daniel Hakim.<br/>
    Saya berasal dari Jengka Pahang.
    </p>
  </div>
  )
}

function NotFound(){
  return (
    <div className='container p-5'>
      <h1>404 - Page Not Found</h1>
      <p>Laman yang anda cari tiada dalam website ini.</p>
    </div>
  )
}

function Footer(){
  return (
    <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/my-react-portfolio" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/my-react-portfolio/about" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="/my-react-portfolio/contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
      <li className="nav-item"><a href="https://github.com/hakimdaniel" target='_blank' rel="noopener noreferrer">
  <i className="bi bi-github"></i>
</a></li>
    </ul>
    <p className="text-center text-body-secondary">© {new Date().getFullYear()} community</p>
  </footer>
</div>
  )
}

function Contact(){
  return (
    <div className='container p-5'>
    <h1><span className='badge text-bg-warning'>Contact me</span></h1>
    <p>Sosial media saya :</p>
    <div className='row justify-content-start'>
      <div className='col-4'>
        <a href='https://t.me/d4n13lh4k1m' style={{fontSize:"40px"}}><i class="bi bi-telegram"></i></a>
      </div>
      <div className='col-4'>
        <a href='https://t.me/d4n13lh4k1m' style={{fontSize:"40px",color:"green"}}><i class="bi bi-whatsapp"></i></a>
      </div>
      <div className='col-4'>
        <a href='https://t.me/d4n13lh4k1m' style={{fontSize:"40px",color:"red"}}><i class="bi bi-youtube"></i></a>
      </div>
    </div>
  </div>
  )
}

function App(){
  return (<>
    <Router basename="/my-react-portfolio">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">H4K1M</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="#/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
        <Route
          path="/" element={<Home/>}/>
        <Route
          path="/about" element={<About/>}/>
        <Route
          path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    <Footer/></>
  )
}

export default App;
