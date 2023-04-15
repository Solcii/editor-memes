import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Hecho con ❤️ by Solcii</p>
      <div className="links">
        <a href="https://github.com/Solcii">
          <i id="github" className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sol-micaela-potschka-506713130/">
          <i id="linkedin" className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
