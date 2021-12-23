import { DemoCard } from "../Transferencia/TransferenciaInicioCard";
import demos from "../Transferencia/transferencia.json";
import styles from "../Ahorro/IMG.module.css";

export function TransferenciaInicio() {

  const str = window.location.href;
  const params = str.split('/');

 // console.log(params[5]);

  return (
    <ul className={styles.ahorroGrid}>
      {demos.map(function (demo) {
        if(demo.id === params[5])
        return <DemoCard key={demo.id} demo={demo} />;
      })}
    </ul>
  );

}
