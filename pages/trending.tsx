import Trending from '../components/Trending';
import styles from "../styles/Home.module.css";

const TrendingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Trending />
    </div>
  );
};

export default TrendingPage;
