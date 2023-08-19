import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" className="bg-transparent position-absolute px-lg-5 px-4 py-4">

        <Navbar.Brand href="#home" ><span className='text-white fw-bold display-4 barlow'>sunnyside</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className=''>
          <Nav className='ms-auto fs-5 align-items-center '>
            <Nav.Link className='ms-5 text-white' href="#About">About</Nav.Link>
            <Nav.Link className='ms-5 text-white' href="#Services">Services</Nav.Link>
            <Nav.Link className='ms-5 text-white' href="#Projects">Projects</Nav.Link>
            <Nav.Link className='ms-5 px-3 py-3 text-white fraunces text-uppercase' href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </nav>

  );
}

export default NavbarMain;