import playersApi from "@/app/api/players/players.api";
import { ApiTeam } from "@/app/api/players/type/api-team.type";
import { CreateOrUpdateTeams } from "@/components/create-or-update-teams/create-or-update-teams";

async function getPlayersFromApi() {
  return playersApi.getTeams();
}
export default async function Teams() {
  const teamsFromApi = (await getPlayersFromApi()) as ApiTeam[];
  return (
    <div className="max-h-screen sm:px-5 h-full w-full flex items-center flex-col">
      <h1 className="text-4xl text-center mt-6">Teams</h1>
      <CreateOrUpdateTeams teamsFromApi={teamsFromApi} />
    </div>
  );
}
