import styles from "./TslaDashboard.module.css";
import PriceGraph from "./components/PriceGraph";
import SentimentGraph from "./components/SentimentGraph";

export default function TslaDashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>TSLA Stock & Sentiment Dashboard</h1>
      <div className={styles.graphs}>
        <PriceGraph />
        <SentimentGraph />
      </div>
    </div>
  );
}
