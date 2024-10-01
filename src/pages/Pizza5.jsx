import Footer from "../components/Footer";
import Header from "../components/Header";
import img6 from "../assets/pizzas/p6.jpg";
import imgLeft from "../assets/arrowLeft.png";
import imgRigth from "../assets/arrowRight.png";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import pizza from "../styles/pizza.module.css";
//import Concluir from "../components/Cuncluir";

const Pizza5 = () => {
  const [Size, setSize] = useState(1);
  const [Qtd, setQtd] = useState(1);
  //const [Ver, setVer] = useState(1);

  const handleQtd = (tipo) => {
    tipo === "mais"
      ? setQtd((prev) => prev + 1)
      : Qtd === 1
      ? null
      : setQtd((prev) => prev - 1);
  };

 
  return (
    <>
      <Header qtd={Qtd} display="d-none"/>
      {/*<Concluir valor={Ver === 2 ? "block" : "" }/>*/}
      <div className="container my-5 ">
        
        <div className="row justify-content-between my-5">
          <div className="col-12 col-md-6 col-lg-6">
            <figure className="descCompleta ">
              <img src={img6} alt="..." className="w-100" />
            </figure>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="nomePizza">pizza havaiana</h3>
            <p className="paragrafoEspecial">
              A pizza havaiana é uma combinação controversa que une molho de
              tomate, queijo, presunto e abacaxi, oferecendo um contraste doce e
              salgado que a torna popular entre os amantes de sabores exóticos.
            </p>
            <h6 className="preco">
              {Size === 0
                ? "14.600 kz"
                : Size === 1
                ? "19.200 kz"
                : Size === 2
                ? "23.800 kz"
                : ""}
            </h6>
            <div className="tamanhoPizza my-4 justify-content-between">
              <span>Tamanho</span>
              <div className="botoes">
                <button
                  className={Size === 0 ? pizza.bgButton : " "}
                  id="btnQtd"
                  onClick={() => setSize(0)}
                >
                  Pequena
                </button>
                <button
                  className={Size === 1 ? pizza.bgButton : " "}
                  id="btnQtd"
                  onClick={() => setSize(1)}
                >
                  Media
                </button>
                <button
                  className={Size === 2 ? pizza.bgButton : " "}
                  id="btnQtd"
                  onClick={() => setSize(2)}
                >
                  Grande
                </button>
              </div>
            </div>

            <div className="mixL d-flex justify-content-start">
              <h2 className="qtdL me-3">Quatidade</h2>
              <div>
                <img
                  src={imgLeft}
                  alt="..."
                  onClick={() => handleQtd("menos")}
                  className="mx-2"
                />
                <strong>{Qtd}</strong>
                <img
                  src={imgRigth}
                  alt="..."
                  onClick={() => handleQtd("mais")}
                  className="mx-2"
                />
              </div>
            </div>
            <button className=" outConfigure" id="btnQtd">

              add ao carrinho <TiShoppingCart size={25} />
            </button>
            {/** onClick={() => setVer(2)} */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pizza5;
