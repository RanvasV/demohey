import styles from "../DemoCard.module.css";
import { Link } from "react-router-dom";

export function DemoCard({ demo }) {
  const imgUrl = demo.poster_path;
  const url = imgUrl.split("(");

  const str = window.location.href;
  const params = str.split("/");
  var id = parseInt(params[6]);

  if (id < demo.max) {
    return (
      <li className={styles.demoCard}>
        <Link to={"/demo/Ahorro/" + demo.id + "/" + (id + 1)}>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={url[0] + "(" + id + ").png"}
            alt={demo.title}
          />
          <div>{demo.title} </div>
        </Link>
      </li>
    );
  }

  else{
    return (
      <li className={styles.demoCard}>
        <Link to={"/demo/Ahorro/"}>
        <div> Menu Finalizado </div>
          <img
            className={styles.demoImage}
            width={350}
            height={650}
            src={url[0] + "(" + demo.max + ").png"}
            alt={demo.title}
          />
          <div>{demo.title}</div>
        </Link>
      </li>
    );
  }
}
