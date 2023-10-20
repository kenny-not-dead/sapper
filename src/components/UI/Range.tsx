import React from "react";
import classes from "./Range.module.scss";

interface RangeProps {
  name: string;
  header: String;
  value: number;
  min: number;
  max: number;
  onChangeValue: (name: string, value: string) => void;
}

export default function Range(props: RangeProps) {
  const onChangeValue = (e: any) => {
    const name = e.target.name;
    const newValue = e.target.value;
    props.onChangeValue(name, newValue);
  };

  return (
    <div className="mr-10">
      <h3>{props.header}</h3>
      <input
        className={classes.range}
        type="range"
        min={props.min}
        max={props.max}
        step={1}
        value={props.value}
        name={props.name}
        onChange={onChangeValue}
      ></input>
    </div>
  );
}
