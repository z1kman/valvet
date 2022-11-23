import styles from "./styles.module.scss";
import cn from "classnames";

// Components
import { Link } from "../Link";

type Items = {
  href?: string | undefined;
  label: string;
};

type Props = {
  direction?: "row" | "column";
  items: Array<Items>;
};

export function LinksMenu(props: Props) {
  const { direction, items } = props;

  return (
    <>
      {items && (
        <ul
          className={cn(
            styles.LinksMenu,
            styles[`LinksMenu_direction_${direction}`]
          )}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                styles.LinksMenu__Item,
                styles[`LinksMenu__Item_direction_${direction}`]
              )}
            >
              <Link label={item?.label} href={item?.href || "#"} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

LinksMenu.defaultProps = {
  direction: "column",
  items: [],
};
