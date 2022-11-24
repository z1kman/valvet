import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

// Component
import { Skeleton } from "../Skeleton";

type Props = {
  imgSrc: string;
  firstName: string;
  lastName: string;
};

export function Card(props: Props) {
  const { imgSrc, firstName, lastName } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = imgSrc;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <>
      <Skeleton loading={!isImageLoaded}>
        <div className={styles.Card__Image}>
          <img src={imgSrc} />
        </div>
      </Skeleton>
      <div className={styles.Card__Info}>
        <Skeleton loading={!isImageLoaded}>
          <p className={styles.Card__InfoItem}>{firstName}</p>
        </Skeleton>
        <Skeleton loading={!isImageLoaded}>
          <p className={styles.Card__InfoItem}>{lastName}</p>
        </Skeleton>
      </div>
    </>
  );
}

Card.defaultProps = {
  imgSrc: "#",
  firstName: "",
  lastName: "",
};
