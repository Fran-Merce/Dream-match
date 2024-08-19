"use client";
import { Button } from "../ui/button";

import { TEAM_PLAYERS_SIZE } from "@/constant/match-requirements.constant";
import { Loader } from "../ui/loader";
import { useCreateOrUpdateTeam } from "@/hooks/use-team.hook";
import { ApiTeam } from "@/app/api/players/type/api-team.type";
import { Team } from "@/store/type/match.type";

interface Props {
  apiTeams: ApiTeam[];
  localTeam?: Team;
}
export const CreateOrUpdateTeamForm = ({ apiTeams, localTeam }: Props) => {
  const {
    handleSelectApiTeam,
    handleSelectPlayer,
    handleCreate,
    handleRemove,
    handleUpdate,
    selectedTeam,
    setTeamName,
    teamName,
    selectedPlayers,
  } = useCreateOrUpdateTeam({
    apiTeams,
    localTeam,
  });

  if (!apiTeams.length) return <Loader />;

  return (
    <form
      onSubmit={localTeam ? handleUpdate : handleCreate}
      className="w-[340px]"
    >
      <label htmlFor="name">Name</label>
      <input
        onChange={(e) => setTeamName(e.target.value)}
        type="text"
        value={teamName}
        className="block w-full appearance-none rounded-md border border-black-200 bg-black-50 px-3 py-2 text-black-900 placeholder-black-400 focus:border-black focus:bg-white focus:outline-none focus:ring-black sm:text-sm"
      />
      <div className="mt-5 flex flex-col justify-center">
        <h1>Select a team that you want to choose a player</h1>
        <div className="flex justify-between mt-3 pr-5">
          <select onChange={handleSelectApiTeam}>
            <option>Select team</option>
            {apiTeams
              .filter(({ team_name }) => team_name)
              .map(({ team_name, team_key }) => (
                <option key={team_key}>{team_name}</option>
              ))}
          </select>
          <select onChange={handleSelectPlayer}>
            <option value="">Select player</option>
            {selectedTeam?.players
              .filter(
                ({ player_name }) => !selectedPlayers.includes(player_name)
              )
              .map(({ player_name, player_id }) => (
                <option key={player_id} value={player_name}>
                  {player_name}
                </option>
              ))}
          </select>
        </div>
        <h1 className="mt-3 text-lg font-semibold">Selected players</h1>
        <ul className="flex flex-col">
          {selectedPlayers.map((player: string) => (
            <li className="w-full flex justify-between" key={player}>
              * {player}
              <small
                className="text-red-500"
                onClick={() => handleRemove(player)}
              >
                Remove
              </small>
            </li>
          ))}
        </ul>
        {selectedPlayers.length === TEAM_PLAYERS_SIZE && (
          <Button type="submit" className="mt-5">
            {localTeam ? "Update Team" : "Create Team"}
          </Button>
        )}
      </div>
    </form>
  );
};
