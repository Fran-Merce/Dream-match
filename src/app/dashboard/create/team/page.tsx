import playersApi from "@/app/api/players/players.api";
import { CreateOrUpdateTeamForm } from "@/components/create-or-update-team-form/create-or-update-team-form";

async function getApiTeamsData() {
  return playersApi.getTeams();
}
export default async function CreateTeam() {
  const apiTeams = await getApiTeamsData();

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="gap-4 md:gap-7 flex flex-col">
        <h1 className="text-4xl mt-5 text-center">Create Team</h1>

        <CreateOrUpdateTeamForm apiTeams={apiTeams || []} />
      </div>
    </div>
  );
}
