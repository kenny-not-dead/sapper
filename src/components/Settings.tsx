import Range from "./UI/Range";
import { useDispatch } from "react-redux";
import { setLength, setLevel } from "../store/sapperSlice";
import { useAppSelector } from "../hooks/redux-hooks";

export default function Settings() {
  const dispatch = useDispatch();
  const levelValue = useAppSelector((state) => state.sapper.level);
  const lengthValue = useAppSelector((state) => state.sapper.length);

  const onChangeValue = (name: string, value: string) => {
    switch (name) {
      case "level":
        dispatch(setLevel(value));
        break;
      case "length":
        dispatch(setLength(value));
        break;
    }
  };

  return (
    <div>
      <h3>Количество уровней</h3>
      <Range
        name={"level"}
        onChangeValue={onChangeValue}
        value={levelValue}
        min={1}
      />
      <Range
        name={"length"}
        onChangeValue={onChangeValue}
        value={lengthValue}
        min={2}
      />
    </div>
  );
}
