import Link from "next/link";
import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/movie/list">Movies</Link>
        </li>
        <li>
          <Link href="/movie/insert">Add Movie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
