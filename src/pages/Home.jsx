import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicos from "../components/Servivos";
import MenuPizzaria from "../components/MenuPizzaria";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header qtd={0}/>

      <Hero />

      <div id="iniciar">
        <Servicos />
      </div>
      <div id="menu-pizzaria">
      <MenuPizzaria />
      </div>

      <Footer />
    </>
  );
};

export default Home;
