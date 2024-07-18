import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <a href="#main" className="home">
        Home
      </a>
      <a href="#features">Features</a>
      <a href="#about">About</a>
      <a href="#conatct">Contact Us</a>
    </div>
  );
};

export default Navbar;
