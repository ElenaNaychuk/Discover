import React from "react";
import rock from "../shared/image/rock.svg";

const Footer = () => {
  
  return (
    <footer className="footer">
      <img className="footer__img" src={rock} alt="Рокета" />
      <a href="/#" className="footer__link">
        Exciting space adventure!
      </a>
    </footer>
  );
};

export default Footer;
