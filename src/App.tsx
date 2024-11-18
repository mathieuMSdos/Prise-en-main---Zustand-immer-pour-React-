import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RegisterNewsLetter from "./components/RegisterNewsLetter";
import UpdateUsernameComponent from "./components/UpdateUsernameComponent";

const navFooter = ["Acceuil", "A propos", "Produit", "Contact"];

function App() {
  return (
    <div>
      <Header />
      {/* IMMER - Modification de state imbriqué - IMMER */}
      <UpdateUsernameComponent/>
      <hr />
      <HeroSection />
      <div className="content-container">du contenu</div>
      <footer>
        <h3>Pages</h3>
        <ul>
          {navFooter.map((link) => (
            <li>{link}</li>
          ))}
        </ul>
        <h3>NewsLetter</h3>
        <RegisterNewsLetter />
      </footer>
    </div>
  );
}

export default App;
