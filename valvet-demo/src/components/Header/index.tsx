import styles from "./styles.module.scss";

// Components
import { Logo } from "../Logo";
import { Link } from "../Link";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Items}>
        <Link label="back" color="secondary" italic size="s"/>
        <Logo />
      </div>
    </header>
  );
}
