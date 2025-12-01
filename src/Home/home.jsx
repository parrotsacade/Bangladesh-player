import { useEffect, useState } from "react";
import PlayerCard from "../components/Card/PlayerCard";

export default function Home() {
  const [player, setPlayer] = useState([]);
  console.log(player);
  useEffect(() => {
    fetch("./public/data/palyer.json")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);

  return (
    <>
      <div className="w-[10%] mx-auto">
        <h1 className="text-center text-white bg-red-600 px-2 rounded-md font-medium my-10">
          Make Your 11
        </h1>
      </div>

      <div className="grid grid-cols-5">
        {player.map((p) => (
          <PlayerCard player={p} />
        ))}
      </div>
    </>
  );
}
