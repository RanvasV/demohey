import styles from "./App.module.css";
import { AhorroPage } from "./Ahorro/AhorroPage";
import { AhorroGrid1 } from "./Ahorro/AbonarAhorroxTrnsferencia/AhorroTransferencia";
import { TransferenciaPage } from "./Transferencia/TransferenciaPage";
import { TransferenciaInicioPage } from "./Transferencia/TransferenciaInicioPage";
import { TransferenciaInicioOpcionesPage } from "./Transferencia/TransferenciaInicioOpcionesPage";
import { PasosPage } from "./Transferencia/PasosPage";
import { HomePage } from "./HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Hey</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/demo/Ahorro/:Demo/:Id" component={ AhorroGrid1 } />
          <Route exact path="/demo/Ahorro" component={AhorroPage} />
          
          <Route exact path="/demo/Transferencia/Opciones" component={TransferenciaPage} />

          <Route exact path="/demo/Transferencia/Inicio/:id" component={TransferenciaInicioOpcionesPage} />
          <Route exact path="/demo/Transferencia/Inicio" component={TransferenciaInicioPage} />

          <Route path="/demo/Transferencia/ConfirmarTransferencia/1" component={PasosPage} />
          <Route path="/demo/Transferencia/:Paso" component={PasosPage} />
        
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
