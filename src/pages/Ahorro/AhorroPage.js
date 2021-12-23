import { AhorroGrid } from "../../components/Ahorro/AhorroGrid";
import styles from "../App.module.css";

export function AhorroPage(){
    return (
        <>
          <h1 className={styles.subTitle}>Opciones De Ahorro </h1>
          <AhorroGrid />
        </>
      );
}