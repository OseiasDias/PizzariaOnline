import "../styles/servicos.css";
import img1 from "../assets/s1.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/s3.png";
const Servicos = () => {
  return (
    <>
      <section className="text-center container">
        <div className="header-servicos">
          <h5 style={{ color: "var(--temaVermelho)" }}>O que servimos</h5>
          <h2>Sua comida favorita</h2>
          <h3>Parceiro de entrega</h3>
        </div>

        <div className="row mt-5  itens-service">
            <div className="col-12 col-md-6 col-lg-4">
                <figure className="h-100">
                    <img src={img1} alt="..."  className="w-75 mx-auto d-block"/>
                    <figcaption>
                        <span>
                        fácil de encomendar</span>
                        <br />
                        <span className="ultSpan">você só precisa de algumas etapas para fazer o pedido de comida</span>
                    </figcaption>
                </figure>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <figure className="h-100">
                    <img src={img2} alt="..."  className="w-75 mx-auto d-block"/>
                    <figcaption>
                        <span>
                        fácil de encomendar</span>
                        <br />
                        <span className="ultSpan">entrega sempre pontual ainda mais rápida</span>
                    </figcaption>
                </figure>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <figure className="h-100">
                    <img src={img3} alt="..."  className="w-75 mx-auto d-block"/>
                    <figcaption className="mt-4">
                        <span>
                        fácil de encomendar</span>
                        <br />
                        <span className="ultSpan">não apenas rápido, a qualidade também é o número um</span>
                    </figcaption>
                </figure>
            </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
