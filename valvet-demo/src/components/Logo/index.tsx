import styles from "./styles.module.scss";
import velvetSvg from "../../svg/velvet.svg";
import managementSvg from "../../svg/management.svg";

export function Logo() {
  return (
    <a href={'#'}>
      <div className={styles.Logo}>
        <img src={velvetSvg} className={styles.Logo__Item_first} />
        <img src={managementSvg} className={styles.Logo__Item_second} />
      </div>
    </a>
  );
}
