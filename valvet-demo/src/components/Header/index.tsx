import styles from "./styles.module.scss";

// Components
import { Logo } from "../Logo";
import { Link } from "../Link";
import { Icon } from "../Icon";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Items}>
        <div className={styles.Header__Item_link}>
          <Link label="back" color="secondary" italic size="s" />
        </div>
        <div className={styles.Header__Item_icon}>
          <Icon name="menu"/>
        </div>
        <Logo />
      </div>
    </header>
  );
}
