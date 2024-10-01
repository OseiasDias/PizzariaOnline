import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import imgLogoBottom from "../assets/Logo.png";

export default function Footer() {
  return (
    <>
    <hr />
  
      <footer className="footer mt-2 container " style={{shadow:"var(--shadow)" }}>
       <div className="f justify-content-between d-flex ">
       <div className="redes-socias mb-3 text-start">
          <h5>Redes Sociais</h5>
          <FaFacebook className="icones-socias mx-2"  size={30}/>
          <FaInstagram className="icones-socias mx-2" size={30} />
          <FaYoutube className="icones-socias mx-2" size={30}  />
        </div>

        <div className="logoBottom">
          <div className="logotipo">
            <a href="/">
            <img src={imgLogoBottom} alt="img logo" width="50" height="50" />
            <span className="text-black">Pizzaria</span>
            </a>
          </div>
        </div>
       
       </div>
      </footer>
    </>
  );
}
