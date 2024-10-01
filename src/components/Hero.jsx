import "../styles/hero.css";
import imgHeroLeft from "../img/Cherry.png";
import imgHero from "../img/HeroImage.png";
import { FiPhoneCall } from "react-icons/fi";
import imgPizza from "../assets/p1.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="section-hero container">
      <div className="row linhaRow">
        <div className="col-12 col-md-12 col-lg-6">
          <span className="spanEspecial">Mais que mais rápido</span>
          <img src={imgHeroLeft} alt="img fast" />
          <div className="marTop">
            <h2 className="h2-text">Seja o mais rápido</h2>
            <h2 className="h2-text">na entrega</h2>
            <h2 className="h2-text">
              {" "}
              da sua <span style={{ color: "var(--temaVermelho)" }}>Pizza</span>
            </h2>
          </div>
          <p>
            Na nossa pizzaria, temos um compromisso especial é proporcionar a
            você uma experiência gastronômica inesquecível
          </p>

          <a href="#iniciar">
            <button className="btn py-2 px-5 btnInicio">Começar</button>
          </a>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <img src={imgHero} alt="moca com pizza" className="w-100" />
        </div>
        <button className="btnZ btn d-none">
          Contate-nos <FiPhoneCall className="iconePhone" />
        </button>

        <div className="mostrarpiza justify-content-between d-flex">
          <div></div>
          <div className="pizza1 d-flex justify-content-between">
            <div>
              <img
                src={imgPizza}
                alt="Imagem de Pizza"
                width={75}
                height={75}
              />
            </div>
            <Link to="/pizza6" className="bp">
            <div className="textosPizza">
             
                <strong>
                  Pizza Italiana <br /> <br />
                  17.000{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </strong>
             
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
