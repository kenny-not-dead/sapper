import React, { useState } from "react";
import Settings from "../components/Settings";
import SettingsIcon from "../components/UI/SettingsIcon";
import { useSelector } from "react-redux";

export default function GameInfo() {
  const level = useSelector((state) => state.sapper.level);
  const length = useSelector((state) => state.sapper.length);
  const [onSettings, setOnSettings] = useState<boolean>(true);

  const showOnSettings = () => {
    setOnSettings(!onSettings);
  };

  return (
    <div className="ml-10 mt-5 w-40">
      <SettingsIcon showOnSettings={showOnSettings} />
      {onSettings ? <Settings /> : ""}
      <div className="flex mt-5">
        <h3 className="font-bold">Уровень:</h3>
        <p className="ml-3">{level}</p>
      </div>
      <div className="flex">
        <h3 className="font-bold">Сложность:</h3>
        <p className="ml-3">{length}</p>
      </div>
    </div>
  );
}
