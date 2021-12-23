import styles from "../DemoCard.module.css";
import { Link } from "react-router-dom";

export function DemoCard({ demo }) {
  const imgUrl = demo.poster_path;

  return (
    <li className={styles.demoCard}>
      <Link to={"/demo/Ahorro/" + demo.id + "/1"}>
        <img
          className={styles.demoImage}
          width={350}
          height={650}
          src={imgUrl}
          alt={demo.title}
        />
        <div>{demo.title}</div>
      </Link>
    </li>
  );
}
