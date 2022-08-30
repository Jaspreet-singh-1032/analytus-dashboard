import Header from "../components/Header";
import styles from "../styles/AppLayout.module.css";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AppLayout;
