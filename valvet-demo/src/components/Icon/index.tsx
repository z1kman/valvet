import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";

export const IconsName = ["close", "menu"] as const;

export type IconType = typeof IconsName[number];

type Props = {
  name: IconType;
};

export const Icon = ({ name }: Props) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `../../svg/icons/${name}.svg`
        );
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    return <img className={styles.Icon} src={ImportedIconRef.current} alt={name} />;
  }

  return null;
};
