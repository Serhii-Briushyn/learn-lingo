import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
