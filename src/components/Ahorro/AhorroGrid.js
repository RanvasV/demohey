import { DemoCard } from "./AhorroCard";
import demos from "./ahorro.json";
import styles from "../DemosGrid.module.css";

export function AhorroGrid() {
  return (
    <ul className={styles.ahorroGrid}>
      {demos.map(function (demo) {
        return <DemoCard key={demo.id} demo={demo} />;
      })}
    </ul>
  );
}
