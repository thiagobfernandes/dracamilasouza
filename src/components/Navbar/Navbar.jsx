import { useState, useEffect } from "react";
import "./Navbar.css";
import { IconButton, useMediaQuery } from "@mui/material";
import { Close, DragHandle } from "@mui/icons-material";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo .png";
import { useLanguage } from "../../context/languageContext"; // Importando o contexto de idioma

const Navbar = ({ hideLinks }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true); // Controle de cor do navbar
  const isMobileScreens = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage(); // Pegando o idioma atual e a função de alternar

  useEffect(() => {
    const banner = document.getElementById("Banner");
    const genericPage = document.getElementById("generic-page");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTransparent(false); // Navbar vai ficar opaca quando o banner desaparecer
          } else {
            setIsTransparent(true); // Caso contrário, navbar será transparente
          }
        });
      },
      { threshold: 0.1 }
    );

    if (banner) observer.observe(banner);
    if (genericPage) observer.observe(genericPage);

    return () => {
      if (banner) observer.unobserve(banner);
      if (genericPage) observer.unobserve(genericPage);
    };
  }, []);

  // Scroll para seções específicas ao navegar
  useEffect(() => {
    const scrollToBanner = () => {
      const banner = document.getElementById("Banner");
      if (banner) {
        banner.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      const section = document.getElementById("generic-page");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        scrollToBanner();
      }
    } else {
      scrollToBanner();
    }
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isTransparent ? "transparent" : "solid"}`}>
      <div className="navbar__logo">
        <Link
          to="/"
          onClick={() => {
            const banner = document.getElementById("Banner");
            if (banner) {
              banner.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar__links">
        {!hideLinks && (
          <ul>
            <li>
              {/* Alterando idioma */}
              <button onClick={toggleLanguage}>
                {language === "pt" ? "🇪🇸 Español" : "🇧🇷 Português"}
              </button>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  const about = document.getElementById("about");
                  if (about) {
                    about.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {language === "pt" ? "Sobre" : "Sobre"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/saude">
                {language === "pt" ? "Saúde Funcional e Holística" : "Salud Funcional y Holística"}
              </NavLink>
            </li>
            <li>
              <NavLink to="/tratamentos">
                {language === "pt" ? "Tratamentos" : "Tratamientos"}
              </NavLink>
            </li>
          </ul>
        )}
        <a href="#contact">
          <button className="navbar__links__button">
            {language === "pt" ? "Contato" : "Contacto"}
          </button>
        </a>
      </div>

      <div className="navbar__mobile">
        <div className="navbar__mobile__icon">
          <IconButton onClick={() => setMenuOpen(true)}>
            <DragHandle />
          </IconButton>
        </div>

        {isMenuOpen && (
          <div className="navbar__mobile__overlay slide__bottom">
            <div className="navbar__mobile__icon">
              <IconButton onClick={() => setMenuOpen(false)}>
                <Close />
              </IconButton>
            </div>
            <div className="navbar__mobile__links">
              {!hideLinks && (
                <ul>
                  <li>
                  <NavLink
                to="/"
                onClick={() => {
                  const about = document.getElementById("about");
                  if (about) {
                    about.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {language === "pt" ? "Sobre" : "Sobre"}
              </NavLink>
                  </li>
                  <li>
                    <NavLink to="/saude">
                      {language === "pt" ? "Saúde Funcional e Holística" : "Salud Funcional y Holística"}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tratamentos">
                      {language === "pt" ? "Tratamentos" : "Tratamientos"}
                    </NavLink>
                  </li>
                  <li>
              {/* Alterando idioma */}
              <button onClick={toggleLanguage}>
                {language === "pt" ? "🇪🇸 Español" : "🇧🇷 Português"}
              </button>
            </li>
                </ul>
                
              )}
             <a href="#contact">
          <button className="navbar__links__button">
            {language === "pt" ? "Entre em contato" : "Ponte en contacto"}
          </button>
        </a>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
