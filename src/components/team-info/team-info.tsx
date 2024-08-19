import { Team } from "@/store/type/match.type";
import React from "react";

interface Props {
  team: Team;
}
export const TeamInfo = ({ team }: Props) => {
  return (
    <div>
      <h2 className="text-white text-3xl sm:text-4xl font-semibold text-center mt-6">
        {team?.name}
      </h2>
      {team?.players.map((player) => (
        <div key={player} className="flex justify-center items-center">
          <p className="text-white text-2xl sm:text-3xl font-normal text-center mt-6">
            {player}
          </p>
        </div>
      ))}
    </div>
  );
};
