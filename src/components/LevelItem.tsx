import Field from "./UI/Field";
import FieldDisable from "./UI/FieldDisable";

interface LevelItemProps {
  arr: String[];
  selectField: (index: number) => void;
  currentLevel: number;
  active?: boolean;
  passed?: boolean;
}

export default function LevelItem(props: LevelItemProps) {
  const selectField = (index: number) => {
    props.selectField(index);
  };

  return (
    <ul className="flex">
      {props.arr.map((i, index) => {
        if (props.active) {
          return (
            <Field key={index} index={index} selectField={selectField} i={i} />
          );
        } else {
          if (!props.passed) {
            return <FieldDisable i={i} />;
          } else {
            return <FieldDisable i={i} passed={true} />;
          }
        }
      })}
    </ul>
  );
}
