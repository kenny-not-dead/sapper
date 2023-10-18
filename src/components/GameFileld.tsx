import { useState, useEffect } from "react";
import LevelItem from "./LevelItem";
import { useAppSelector } from "../hooks/redux-hooks";

export default function GameFileld() {
  const levelValue = useAppSelector((state) => state.sapper.level);
  const lengthValue = useAppSelector((state) => state.sapper.length);

  const [circuitry, setCircuitry] = useState<String[][]>([]);

  useEffect(() => {
    let onStartGame: String[][] = [];
    for (let x = 0; x < levelValue; x++) {
      const arr = [];
      for (let i = 0; i < lengthValue; i++) {
        arr.push((Math.random() < 0.5 ? 0 : 1).toString());
      }
      onStartGame.push(arr);
    }
    setCircuitry(onStartGame);
  }, [levelValue, lengthValue]);

  return (
    <div className="w-80 ">
      {circuitry.map((i, index) => {
        return <LevelItem key={index} arr={i} />;
      })}
    </div>
  );
}
