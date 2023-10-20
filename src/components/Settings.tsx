import Range from "./UI/Range";
import { useDispatch } from "react-redux";
import { setLength, setLevel, setTension } from "../store/sapperSlice";
import { useAppSelector } from "../hooks/redux-hooks";

export default function Settings() {
  const dispatch = useDispatch();
  const levelValue = useAppSelector((state) => state.sapper.level);
  const lengthValue = useAppSelector((state) => state.sapper.length);
  const tensionValue = useAppSelector((state) => state.sapper.tension);

  const onChangeValue = (name: string, value: string) => {
    switch (name) {
      case "level":
        dispatch(setLevel(value));
        break;
      case "length":
        dispatch(setLength(value));
        break;
      case "tension":
        dispatch(setTension(value));
        break;
    }
  };

  return (
    <div className="flex mt-5 ">
      <Range
        name={"level"}
        header={"Количество уровней"}
        onChangeValue={onChangeValue}
        value={levelValue}
        min={1}
        max={10}
      />
      <Range
        name={"length"}
        header={"Количество полей"}
        onChangeValue={onChangeValue}
        value={lengthValue}
        min={2}
        max={10}
      />
      <Range
        name={"tension"}
        header={"Напряженность"}
        onChangeValue={onChangeValue}
        value={tensionValue}
        min={1}
        max={lengthValue - 1}
      />
    </div>
  );
}
