import classes from "./Field.module.scss";

interface FieldType {
  index: number;
  selectField: (index: number) => void;
  i: String;
}

export default function Field(props: FieldType) {
  const selectField = () => {
    props.selectField(props.index);
  };

  return <li className={classes.wrapper} onClick={selectField}></li>;
}
