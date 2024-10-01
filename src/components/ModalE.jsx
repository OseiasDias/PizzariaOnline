/* eslint-disable react/prop-types */
import "../index.css";
import Modal from "react-bootstrap/Modal";

function ModalE(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-c">
        <Modal.Title id="contained-modal-title-vcenter">
          Contacte-nos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-cover">
        <div className="bg-fundo">
          <div className="row justify-content-between  ">
          
            <div className="col-12 col-md-12 col-lg-12">
              <form action="mailto:pizzariafood@gmail.com" method="post">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-6">
                    <input
                      type="text"
                      placeholder="Digite Seu Nome:"
                      required
                      className="w-100 form-control mb-2"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6">
                    <input
                      type="email"
                      placeholder="Digite Seu Email:"
                      required
                      className="w-100 form-control mb-2"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-12">
                    <input
                      type="text"
                      placeholder="Assuto:"
                      required
                      className="w-100 form-control mb-2"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="textoAll"
                      placeholder="Digite a sua Mensagem..."
                      id="mensagemTexto"
                      className="w-100 form-control mb-2"
                      cols="10"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-inline">
        <p className="text-center">
                  <span>
                    Viana-zango 0, <strong>Condominio Vida Pacifica</strong>,rua 7 sp 41 <br/>
                    +244 <strong>938 629 915</strong>

                  </span></p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalE;
