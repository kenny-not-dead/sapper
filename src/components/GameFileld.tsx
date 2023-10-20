import { useState, useEffect } from "react";
import LevelItem from "./LevelItem";
import { useAppSelector } from "../hooks/redux-hooks";
import classes from "./GameFileld.module.scss";
import sapper from "./../static/pngs/sapper.png";
import Modal from "./UI/modal";

export default function GameFileld() {
  const levelValue = useAppSelector((state) => state.sapper.level);
  const lengthValue = useAppSelector((state) => state.sapper.length);
  const tensionValue = useAppSelector((state) => state.sapper.tension);

  const [circuitry, setCircuitry] = useState<String[][]>([]);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [indexLevel] = useState<number[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  const startGame = () => {
    setCurrentLevel(0);
    let onStartGame: String[][] = [];
    indexLevel.splice(0, indexLevel.length);

    for (let x = 0; x < levelValue; x++) {
      let tension = 0;
      const arr = [];
      indexLevel.push(x + 1);
      for (let i = 0; i < lengthValue; i++) {
        if (tension < tensionValue) {
          const value = (Math.random() < 0.5 ? 0 : 1).toString();
          if (value === "1") {
            arr.push(value);
            tension++;
          } else {
            arr.push(value);
          }
        } else {
          arr.push("0");
        }
      }
      tension = 0;
      onStartGame.push(arr);
    }

    setCircuitry(onStartGame);
  };

  useEffect(() => {
    startGame();
  }, [levelValue, lengthValue, tensionValue]);

  const selectField = (index: number) => {
    if (circuitry[currentLevel][index] === "1") {
      setCurrentLevel(0);
      setModalActive(true);
    } else {
      if (currentLevel === levelValue - 1) {
        setWin(true);
        setCurrentLevel(0);
        setModalActive(true);
      } else {
        setCurrentLevel(currentLevel + 1);
      }
    }
  };

  const closeModal = () => {
    setModalActive(false);
    startGame();
  };

  return (
    <div className="flex justify-center ">
      {modalActive ? (
        <Modal
          closeModal={closeModal}
          win={win ? "Поздравляю, ты разминировал поле!" : "Увы, ты проиграл! "}
        />
      ) : (
        ""
      )}
      <div>
        {indexLevel.map((i) => {
          if (currentLevel + 1 == i) {
            return (
              <div className="flex" key={i}>
                <h3 className={classes.headerlevelActive}> Уровень {i}</h3>{" "}
                <img src={sapper} className={classes.sapperImg} />
              </div>
            );
          } else {
            return (
              <h3 key={i} className={classes.headerlevel}>
                {" "}
                Уровень {i}
              </h3>
            );
          }
        })}
      </div>
      <div>
        {circuitry.map((i, index) => {
          if (currentLevel === index) {
            return (
              <LevelItem
                active={true}
                key={index}
                arr={i}
                selectField={selectField}
                currentLevel={currentLevel}
              />
            );
          } else {
            if (currentLevel < index) {
              return (
                <LevelItem
                  key={index}
                  arr={i}
                  selectField={selectField}
                  currentLevel={currentLevel}
                />
              );
            } else {
              return (
                <LevelItem
                  key={index}
                  arr={i}
                  selectField={selectField}
                  currentLevel={currentLevel}
                  passed={true}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
}
