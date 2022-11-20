import styles from "./styles.module.scss";

// Components
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Logo}>
        <Logo />
      </div>
    </header>
  );
}
