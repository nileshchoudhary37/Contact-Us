import styles from "./Navigation.module.css";

const Navigation = () => {
  console.log(styles);
  return (
    <nav className={`${styles.navigation}`}>
      <div className="logo">
        <img src="./images/Image.png" alt="Image not found" />
      </div>

      <ul>
        <li>HOme</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
