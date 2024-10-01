import Footer from "../components/Footer";
import Header from "../components/Header";
import img3 from "../assets/pizzas/p3.jpg";
import imgLeft from "../assets/arrowLeft.png";
import imgRigth from "../assets/arrowRight.png";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import pizza from "../styles/pizza.module.css";

/*import img2 from "../assets/pizzas/p2.jpeg";
import img3 from "../assets/pizzas/p3.jpg";
import img4 from "../assets/pizzas/p4.jpg";
import img5 from "../assets/pizzas/p5.webp";
import img6 from "../assets/pizzas/p6.jpg";*/

const Pizza2 = () => {
  const [Size, setSize] = useState(1);
  const [Qtd, setQtd] = useState(1);

  const handleQtd = (tipo) =>{
      
      tipo === "mais" ?  
      setQtd((prev) => prev + 1) :
      Qtd === 1 ?
      null : setQtd((prev) => prev - 1);
  }
  return (
    <>
      <Header qtd={Qtd} display="d-none"/>

      <div className="container my-5 ">
        <div className="row justify-content-between my-5">
          <div className="col-12 col-md-6 col-lg-6">
            <figure className="descCompleta ">
              <img src={img3} alt="..." className="w-100" />
            </figure>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="nomePizza">Pizza Mussarela</h3>
            <p className="paragrafoEspecial">
            A pizza de mussarela é uma clássica variedade que combina uma base de massa fina ou grossa com molho de tomate e queijo mussarela derretido, frequentemente temperada com orégano e assada até ficar crocante.
            </p>
            <h6 className="preco">{Size === 0 ? "12.600 kz" :Size === 1 ? "17.200 kz" : Size === 2 ? "21.800 kz" : ""}</h6>
            <div className="tamanhoPizza my-4 justify-content-between">
              <span>Tamanho</span>
              <div className="botoes">
                <button className={ Size === 0 ? pizza.bgButton : " "} id="btnQtd" onClick={() => setSize(0)}>
                  Pequena
                </button>
                <button className={ Size === 1 ? pizza.bgButton : " "} id="btnQtd" onClick={() => setSize(1)}>
                  Media
                </button>
                <button className={ Size === 2 ? pizza.bgButton : " "} id="btnQtd" onClick={() => setSize(2)}>
                  Grande
                </button>
              </div>
            </div>
            
            <div className="mixL d-flex justify-content-start">
              <h2 className="qtdL me-3">Quatidade</h2>
              <div>
                <img src={imgLeft} alt="..." onClick={()=> handleQtd("menos")}  className="mx-2"/><strong>{Qtd}</strong>
                <img src={imgRigth}  alt="..." onClick={()=> handleQtd("mais")} className="mx-2" />
              </div>
            </div>
            <button className=" outConfigure" id="btnQtd">
              add ao carrinho <TiShoppingCart size={25} />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pizza2;
