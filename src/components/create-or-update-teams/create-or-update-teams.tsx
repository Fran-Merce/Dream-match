"use client";
import { useMatchStore } from "@/store/match.store";
import { CreateOrUpdateTeamForm } from "../create-or-update-team-form/create-or-update-team-form";
import { Button } from "../ui/button";
import { NotTeamsFound } from "../not-teams-found/not-teams-found";
import { ApiTeam } from "@/app/api/players/type/api-team.type";
import { Loader } from "../ui/loader";

interface Props {
  teamsFromApi: ApiTeam[];
}
export const CreateOrUpdateTeams = ({ teamsFromApi }: Props) => {
  const userCreatedTeams = useMatchStore((state) => state.match.teams);
  const { deleteTeam } = useMatchStore();
  if (!userCreatedTeams) return <Loader />;

  if (!userCreatedTeams.length)
    return (
      <NotTeamsFound text="Not Teams Fount, Please create at least 1 team to see it" />
    );

  return (
    <div className="w-[300px] sm:w-[560px]">
      <ul>
        {userCreatedTeams.map((team) => (
          <li key={team.id} className="flex flex-col gap-3">
            <CreateOrUpdateTeamForm apiTeams={teamsFromApi} localTeam={team} />
            <Button
              className="w-[300px] sm:w-[560px]"
              onClick={() => deleteTeam(team.id)}
            >
              Delete Team
            </Button>
            <hr className="my-2 h-2 bg-red" />
          </li>
        ))}
      </ul>
    </div>
  );
};
