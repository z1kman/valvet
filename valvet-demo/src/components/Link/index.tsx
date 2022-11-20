import styles from "./styles.module.scss";
import velvetSvg from "../../svg/Velvet.svg";
import managementSvg from "../../svg/Management.svg";

type Props = {
  label?: string;
  href?: string | undefined;
  italic?: boolean;
  color?: "primary" | "secondary";
};

export function Link(
  props: Props = { label: "", href: "#", italic: false, color: "primary" }
) {
  const { label, href, italic, color } = props;

  return (
    <a href={href}>
      {label}
    </a>
  );
}
