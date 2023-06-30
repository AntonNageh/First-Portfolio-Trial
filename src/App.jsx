
import image from '/A logo.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import './App.css'
function App() {

  return (
    <div className="App">
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap" rel="stylesheet"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap');
</style>

      <nav className="navbar navbar-expand-lg bg-transparent">
  <img className="navbar-brand ms-5"  width="150" height="200" src={image}></img>
  <button className="navbar-toggler" type="button" onClick={()=>myFunction()} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-light"></span>
  </button>

  <div className="navbar-collapse d-flex flex-row-reverse me-1" id='navbarSupportedContent' style={{ transform:"translate(-10%,-100%)" }}>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#"><span>01. </span>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span>02. </span>Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span>03. </span>Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span>04. </span>Contact</a>
      </li>
    <button className='navbtn ms-2'>
      Resume
    </button>
    </ul>
  </div>
</nav>
<div className='container section1'>
    <h3>Hi, my name is </h3>
    <h1>Anton Nageh.</h1>
    <h1 style={{ opacity:"0.6" }}>I build things for the web.</h1>
    <h5 style={{ opacity:"0.5" }}>I'm a software engineer specializing in building (and occionally <br></br> designing) 
    exceptional digital designs experiences.Currently, I'm focused on <br></br>
    building accessible, human-centered products.</h5>
    <button className='butn'>Check out my Resume!</button>
</div>








<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
    </div>

  )
}

export default App
