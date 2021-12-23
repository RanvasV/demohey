import { DemoCard } from "../AhorroCardID";
import demos from "../ahorro.json";
import styles from "../IMG.module.css";

export function AhorroImg() {

  const str = window.location.href;
  const params = str.split('/');

  return (
    <ul className={styles.ahorroGrid}>
      {demos.map(function (demo) {
        if(demo.id === params[5])
        return <DemoCard key={demo.id} demo={demo} />;
      })}
    </ul>
  );

}
