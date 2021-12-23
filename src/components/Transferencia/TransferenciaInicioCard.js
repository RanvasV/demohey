import styles from "../DemoCard.module.css";
import { Link } from "react-router-dom";

export function DemoCard({ demo }) {
  const imgUrl = demo.poster_path;
  const imgUrl2 = demo.opciones_path;

  const str = window.location.href;
  const params = str.split('/');

  
  const imgUrl3 = params[6];

  if (params[6] === "EditarAlias" || params[6] === "EliminarCuenta" || params[6] === "QuitarDeFavoritos") {
    return (
      <li className={styles.demoCard}>
        <Link to={"/demo/Transferencia/Inicio"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={demo[imgUrl3]}
            alt={demo.title}
          />
          <div>{demo["title"+imgUrl3]}</div>
        </Link>
      </li>
    );
  }
  
  if (params[5] === "Inicio") {
    return (
      <li className={styles.transCard}>
        <Link to={"/demo/Transferencia/Opciones/"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl + "1).png"}
            alt={demo.title}
          />
          <div>{demo.title} </div>
        </Link>
        <Link to={"/demo/Transferencia/Inicio/EditarAlias"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl2 + "1).png"}
            alt={demo.title}
          />
          <div> Editar Alias </div>
        </Link>
        <Link to={"/demo/Transferencia/Inicio/QuitarDeFavoritos"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl2 + "2).png"}
            alt={demo.title}
          />
          <div>Quitar De Favoritos</div>
        </Link>
        <Link to={"/demo/Transferencia/Inicio/EliminarCuenta"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl2 + "3).png"}
            alt={demo.title}
          />
          <div>Eliminar Cuenta </div>
        </Link>
      </li>
    );
  }
}
