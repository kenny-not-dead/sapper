import GameFileld from "../components/GameFileld";
import GameInfo from "../components/GameInfo";

export default function SapperPage() {
  return (
    <div>
      <h1>Sapper</h1>

      <div className="flex">
        <GameFileld />
        <GameInfo />
      </div>
    </div>
  );
}
