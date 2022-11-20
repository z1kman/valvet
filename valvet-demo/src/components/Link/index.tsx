import styles from "./styles.module.scss";
import cn from "classnames";

type Props = {
  label?: string;
  href?: string | undefined;
  italic?: boolean;
  color?: "primary" | "secondary";
  size?: "s" | "m" | "l";
};

export function Link(props: Props) {
  const { label, href, italic, color, size } = props;

  return (
    <a
      className={cn(
        styles.Link,
        styles[`Link_size_${size}`],
        styles[`Link_color_${color}`],
        {
          [styles.Link_italic]: italic,
        }
      )}
      href={href}
    >
      {label}
    </a>
  );
}

Link.defaultProps = {
  label: "",
  href: "#",
  italic: false,
  color: "primary",
  size: "m",
};
