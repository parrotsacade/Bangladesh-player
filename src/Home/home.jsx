import { useEffect, useState } from "react";
import PlayerCard from "../../public/PlayerCard";

export default function Home() {

  const [player, setPlayer] = useState([]);

  const [playerDetails,setPlayerDetails] = useState([])
  console.log(playerDetails,"playerDetails");

  function addPlayer(details){
    // console.log(details,"details");
    const newPlayer = [...playerDetails,details]
    setPlayerDetails(newPlayer)
  }

  console.log(player);
  useEffect(() => {
    fetch("palyer.json")
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

      <div className="grid grid-cols-10">
        <div className="grid grid-cols-3 col-span-8">
          {player.map((p) => (
            <PlayerCard player={p} addPlayer={addPlayer} />
          ))}
        </div>
        <div className="col-span-2">
          <h1 className="text-center text-white bg-purple-600 px-2 rounded-md font-medium mb-5">Selected Player</h1>
            <div>
              {
                playerDetails.map((p)=><>
                <div className="flex items-center gap-0.5">
                  <img src={p.img} alt="playerimage" className="w-10 h-10" />
                  <p>{p.name}</p>
                </div>
                </>)
              }
            </div>
        </div>
      </div>
    </>
  );
}
