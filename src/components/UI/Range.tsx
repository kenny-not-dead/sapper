import React from "react";
import classes from "./Range.module.scss";

interface RangeProps {
  name: String;
  value: Number;
  min: Number;
  onChangeValue: (name: string, value: string) => void;
}

export default function Range(props: RangeProps) {
  const onChangeValue = (e: any) => {
    const name = e.target.name;
    const newValue = e.target.value;
    props.onChangeValue(name, newValue);
  };

  return (
    <input
      className={classes.range}
      type="range"
      min={props.min}
      max={10}
      step={1}
      value={props.value}
      name={props.name}
      onChange={onChangeValue}
    ></input>
  );
}
