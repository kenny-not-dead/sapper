import React from "react";

interface GameinfoItemType {
  label: string;
  value: number;
}

export default function GameinfoItem(props: GameinfoItemType) {
  return (
    <li className="flex my-5 mr-7">
      <h3 className="font-bold">{props.label}</h3>
      <p className="ml-2">{props.value}</p>
    </li>
  );
}
