import classes from "./Field.module.scss";
import mine from "./../../static/pngs/mine.png";

interface FieldDisableType {
  i: String;
  passed?: boolean;
}

export default function FieldDisable(props: FieldDisableType) {
  return (
    <li
      className={
        !props.passed ? classes.wrapperdisable : classes.wrapperdisablepassed
      }
    >
      {!props.passed ? "" : props.i === "1" ? <img src={mine} alt="*" /> : ""}
    </li>
  );
}
