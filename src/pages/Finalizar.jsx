import Footer from "../components/Footer";
import Header from "../components/Header";
//import img6 from "../assets/pizzas/p6.jpg";
import Table from "react-bootstrap/Table";

const Finalizar = () => {
  return (
    <>
      <Header qtd={2} display="d-none"/>
      {/*<Concluir valor={Ver === 2 ? "block" : "" }/>*/}
      <div className="container my-5  espaco">
      <h3>Itens no Carrinho</h3>
        <div className="row justify-content-between my-5 ">
       
           <div className="col-12">
           <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Tamanho</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody className="bodyTable">
              <tr>
                <td>1</td>
                <td>Pizza Italiana</td>
                <td>Media</td>
                <td>2</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Pizza Havaina</td>
                <td>Pequena</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pizza Mossarela</td>
                <td>Media</td>
                <td>1</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={3}>
                  <strong>Preço Total</strong>
                </td>
                <td>
                  <strong>78.023 kz</strong>
                </td>
              </tr>
            </tfoot>
          </Table>
          <div className="d-flex justify-content-between">
            <div></div>
            <div className="buttonDiv">
              <button className="terminar btn">Pagar</button>
            </div>
          </div>
           </div>
           
        </div>
        
      </div>
      

      <Footer />
    </>
  );
};

export default Finalizar;
