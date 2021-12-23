import { DemoCard } from "./DemoCard";
import demos from "./demos.json";
import styles from "./DemosGrid.module.css";

export function DemosGrid() {

  return (
    <ul className={styles.demosGrid}>
      {demos.map(function (demo) {
        return <DemoCard key={demo.id} demo={demo} />;
      })}
    </ul>
  );
}
