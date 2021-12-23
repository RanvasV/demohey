import { TransferenciaInicio } from "../../components/Transferencia/TransferenciaInicio";
import styles from "../App.module.css";

export function TransferenciaInicioPage() {
  return (
    <>
      <h1 className={styles.subTitle}>Opciones De Cuentas Favoritas </h1>
      <TransferenciaInicio />
    </>
  );
}
