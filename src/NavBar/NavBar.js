import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <ul className={styles.nav}>
          <li>
            <Link to="/todos" className={styles.link}>
              TO-DOS
            </Link>
          </li>
          <li>
            <Link to="/friends" className={styles.link}>
              FRIENDS
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
