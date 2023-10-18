import Field from "./UI/Field";

interface LevelItemProps {
  arr: String[];
}

export default function LevelItem(props: LevelItemProps) {
  return (
    <ul className="flex">
      {props.arr.map((i, index) => {
        return <Field key={index} />;
      })}
    </ul>
  );
}
