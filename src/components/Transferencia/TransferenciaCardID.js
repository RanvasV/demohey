import styles from "../DemoCard.module.css";
import { Link } from "react-router-dom";

export function DemoCard({ demo }) {
  const imgUrl = demo.poster_path;
  const imgUrl2 = demo.opciones_path;

  const str = window.location.href;
  const params = str.split("/");
  var id = params[4];

  var id2 =parseInt(params[6]);

  console.log("params5: " + params[5] + " params6: " + params[6]);

  if(params[5] === "ConfirmarTransferencia" && id2 === 2){
    return(
      <li className={styles.transCard2}>
      <Link to={"/demo/Transferencia/Inicio"}>
        <img
          className={styles.demoImage}
          width={350}
          height={650}
          src={imgUrl + "2).png"}
          alt={demo.title}
        />
        <div> Finalizar Transferencia </div>
      </Link>
      <Link to={"/demo/Transferencia/GuardarComoFavorita/4"}>
        <img
          className={styles.demoImage}
          width={350}
          height={650}
          src={imgUrl + "3).png"}
          alt={demo.title}
        />
        <div>Guardar Como Favorita</div>
      </Link>
    </li>
    );
    }

  if (params[5] === "TransferirDesde") {
    return (
      <li className={styles.demoCard}>
        <Link to={"/demo/Transferencia/Opciones"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl + "1).png"}
            alt={demo.title}
          />
          <div>{demo.title}</div>
        </Link>
      </li>
    );
  }
  
  if (id === "Transferencia" && isNaN(id2)) {
    return (
      <li className={styles.transCard}>
        <Link to={"/demo/Transferencia/ConfirmarTransferencia/1"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl + "2).png"}
            alt={demo.title}
          />
          <div>{demo.title}</div>
        </Link>
        <Link to={"/demo/Transferencia/TransferirDesde"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl2 + "1).png"}
            alt={demo.title}
          />
          <div> Transferir Desde </div>
        </Link>
        <Link to={"/demo/Transferencia/ActivaSinLimites/1"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl2 + "2).png"}
            alt={demo.title}
          />
          <div>Activa Sin Limites</div>
        </Link>
        <Link to={"/demo/Transferencia/MontoMayorAlLimite/1"}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={imgUrl2 + "3).png"}
            alt={demo.title}
          />
          <div>Monto Mayor Al Limite </div>
        </Link>
      </li>
    );
  }


  if (typeof id2 == 'number') {

    if (params[6] < demo.max) {
      return (
        <li className={styles.demoCard}>
          <Link to={"/demo/Transferencia/" + demo.id + "/" + (id2 + 1)}>
            <img
              className={styles.demoImage}
              width={350}
              height={650}
              src={imgUrl + id2 + ").png"}
              alt={demo.title}
            />
            <div>{demo["title"+id2]}</div>
          </Link>
        </li>
      );
    } 

    else {
      return (
        <li className={styles.demoCard}>
          <Link to={"/demo/Transferencia/Inicio"}>
            <img
              className={styles.demoImage}
              width={350}
              height={650}
              src={imgUrl + demo.max + ").png"}
              alt={demo.title}
            />
            <div>{demo.titlemax}</div>
          </Link>
        </li>
      );
    }
  }

  

}
