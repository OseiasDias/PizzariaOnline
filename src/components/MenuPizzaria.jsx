import { Link } from "react-router-dom";
import img1 from "../assets/pizzas/p1.jpg";
import img2 from "../assets/pizzas/p2.jpeg";
import img3 from "../assets/pizzas/p3.jpg";
import img4 from "../assets/pizzas/p4.jpg";
import img5 from "../assets/pizzas/p5.webp";
import img6 from "../assets/pizzas/p6.jpg";
import "../styles/servicos.css";

const MenuPizzaria = () => {
  return (
    <>
      <section className="container mt-5">
        <div className="header-servicos text-center">
          <h5 style={{ color: "var(--temaVermelho)" }}>Nosso cardápio</h5>
          <h2>
            cardápio que sempre faz <br /> você se apaixonar
          </h2>
        </div>
        <div className="row seccao-menuPizaria">
          <div className="col-12 col-md-6  col-lg-3">
            <Link className="tiraLink" to="/pizza">
              <figure className="h-75 ">
                <div className="h-100">
                  <img src={img1} alt="..." className="w-100 h-100" />
                </div>
                <figcaption>
                  <span>Pizza romana- Pinsa</span>
                  <br />
                  <span className="princePizza">
                    12.500{" "}
                    <i
                      style={{ color: "var(--temaVermelho)" }}
                      className="collorir"
                    >
                      kz
                    </i>
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>
        
            <div className="col-12 col-md-6  col-lg-3">
            <Link className="tiraLink" to="/pizza1">
              <figure className="h-75 ">
                <div className="h-100">
                  <img src={img2} alt="..." className="w-100 h-100" />
                </div>
                <figcaption>
                  <span>Pizza de Queijo</span>
                  <br />
                  <span className="princePizza">
                    13.600{" "}
                    <i
                      style={{ color: "var(--temaVermelho)" }}
                      className="collorir"
                    >
                      kz
                    </i>
                  </span>
                </figcaption>
              </figure>
              </Link>
            </div>
          
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza2">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img3} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span>Pizza Mussarela</span>
                <br />
                <span className="princePizza">
                  12.500{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza3">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img4} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span>Pizza landrea</span>
                <br />
                <span className="princePizza">
                  11.200{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza4">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img5} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span> Pizza al tegamino</span>
                <br />
                <span className="princePizza">
                  19.400{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza5">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img6} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span>Pizza havaiana</span>
                <br />
                <span className="princePizza">
                  16.200{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          {/** 
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza6">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img3} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span>Pizza de Queijo</span>
                <br />
                <span className="princePizza">
                  12.500{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza7">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img4} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span>Pizza landrea</span>
                <br />
                <span className="princePizza">
                  11.200{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza8">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img5} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span> Pizza al tegamino</span>
                <br />
                <span className="princePizza">
                  19.400{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
          */}
          <div className="col-12 col-md-6  col-lg-3">
            <Link className="tiraLink" to="/pizza">
              <figure className="h-75 ">
                <div className="h-100">
                  <img src={img1} alt="..." className="w-100 h-100" />
                </div>
                <figcaption>
                  <span>Pizza romana- Pinsa</span>
                  <br />
                  <span className="princePizza">
                    12.500{" "}
                    <i
                      style={{ color: "var(--temaVermelho)" }}
                      className="collorir"
                    >
                      kz
                    </i>
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>
        
            <div className="col-12 col-md-6  col-lg-3">
            <Link className="tiraLink" to="/pizza1">
              <figure className="h-75 ">
                <div className="h-100">
                  <img src={img2} alt="..." className="w-100 h-100" />
                </div>
                <figcaption>
                  <span>Pizza de Queijo</span>
                  <br />
                  <span className="princePizza">
                    13.600{" "}
                    <i
                      style={{ color: "var(--temaVermelho)" }}
                      className="collorir"
                    >
                      kz
                    </i>
                  </span>
                </figcaption>
              </figure>
              </Link>
            </div>
          
          <div className="col-12 col-md-6  col-lg-3">
          <Link className="tiraLink" to="/pizza2">
            <figure className="h-75 ">
              <div className="h-100">
                <img src={img3} alt="..." className="w-100 h-100" />
              </div>
              <figcaption>
                <span>Pizza Mussarela</span>
                <br />
                <span className="princePizza">
                  12.500{" "}
                  <i
                    style={{ color: "var(--temaVermelho)" }}
                    className="collorir"
                  >
                    kz
                  </i>
                </span>
              </figcaption>
            </figure>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPizzaria;
