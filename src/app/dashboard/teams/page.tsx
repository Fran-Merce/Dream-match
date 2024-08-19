import playersApi from "@/app/api/players/players.api";
import { CreateOrUpdateTeams } from "@/components/create-or-update-teams/create-or-update-teams";
import { redirect } from "next/navigation";

async function getTeamsFromApi() {
  try {
    return await playersApi.getTeams();
  } catch (error) {
    redirect("/");
  }
}
export default async function Teams() {
  const teamsFromApi = await getTeamsFromApi();
  return (
    <div className="max-h-screen sm:px-5 h-full w-full flex items-center flex-col">
      <h1 className="text-4xl text-center mt-6">Teams</h1>
      <CreateOrUpdateTeams teamsFromApi={teamsFromApi} />
    </div>
  );
}
