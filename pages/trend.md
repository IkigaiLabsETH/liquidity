import TrendingGainers from '../components/TrendingGainers';
import styles from '../styles/Home.module.css';

const TrendPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <TrendingGainers />
    </div>
  );
};

export default TrendPage;


