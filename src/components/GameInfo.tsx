import React, { useState } from "react";
import Settings from "../components/Settings";
import SettingsIcon from "../components/UI/SettingsIcon";
import { useAppSelector } from "../hooks/redux-hooks";
import GameinfoItem from "./UI/GameinfoItem";

export default function GameInfo() {
  const level = useAppSelector((state) => state.sapper.level);
  const length = useAppSelector((state) => state.sapper.length);
  const tension = useAppSelector((state) => state.sapper.tension);

  const [onSettings, setOnSettings] = useState<boolean>(true);

  const showOnSettings = () => {
    setOnSettings(!onSettings);
  };

  console.log(tension);

  return (
    <div className="my-5 ">
      <div>
        <SettingsIcon showOnSettings={showOnSettings} />
        {onSettings ? <Settings /> : ""}
      </div>

      <ul className="flex">
        <GameinfoItem label="Уровней:" value={level} />
        <GameinfoItem label="Сложность:" value={length} />
        <GameinfoItem label="Напряженность:" value={tension} />
      </ul>
    </div>
  );
}
