import { ApiTeam } from "@/app/api/players/type/api-team.type";
import { TEAM_PLAYERS_SIZE } from "@/constant/match-requirements.constant";
import { Routes } from "@/constant/routes.constant";
import { useMatchStore } from "@/store/match.store";
import { Team } from "@/store/type/match.type";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  apiTeams: ApiTeam[];
  localTeam?: Team | null;
}
export const useCreateOrUpdateTeam = ({
  apiTeams,
  localTeam = null,
}: Props) => {
  const { createTeam, updateTeam } = useMatchStore();
  const rivalTeam = useMatchStore((state) =>
    state.match.teams.find((team) => team.id !== localTeam?.id)
  );
  const router = useRouter();

  const [selectedTeam, setSelectedTeam] = useState<ApiTeam | null>(null);
  const [teamName, setTeamName] = useState<string>(localTeam?.name ?? "");
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>(
    localTeam?.players || []
  );

  const handleSelectApiTeam = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const team = apiTeams.find((t) => t.team_name === target.value);
    if (!team) return;
    setSelectedTeam(team);
  };
  const handleSelectPlayer = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    if (selectedPlayers.length === TEAM_PLAYERS_SIZE) {
      return toast.error(
        `You can't select more than ${TEAM_PLAYERS_SIZE} players`
      );
    }

    const player = selectedTeam?.players.find(
      ({ player_name }) => player_name === target.value
    );
    if (!player) return;

    const isPlayerAlreadySelected = selectedPlayers.includes(
      player.player_name
    );

    if (isPlayerAlreadySelected) {
      console.log(isPlayerAlreadySelected);
      return toast.error("Player already selected");
    }

    const isPlayerOnOtherTeam = rivalTeam?.players.includes(player.player_name);

    if (isPlayerOnOtherTeam) {
      return toast.error("Player already on other team");
    }
    setSelectedPlayers((prev) => prev.concat(player.player_name));
  };
  const handleRemove = (name: string) => {
    setSelectedPlayers((prev) =>
      prev.filter((playerName) => name !== playerName)
    );
  };

  const handleCreate = (): void => {
    if (!isValidTeam()) return;

    createTeam({
      id: window.crypto.randomUUID(),
      name: teamName,
      players: selectedPlayers,
    });
    toast.success("Team created successfully");
    router.push(Routes.MATCH);
  };

  const isValidTeam = () => {
    if (selectedPlayers.length !== TEAM_PLAYERS_SIZE || !teamName) {
      toast.error("Error creating team, Team must have 5 players and a name");
      return;
    }
    return true;
  };
  const handleUpdate = () => {
    if (!isValidTeam() || !localTeam) return;

    updateTeam(localTeam.id, {
      name: teamName,
      players: selectedPlayers,
    });
    toast.success("Team updated successfully");
  };

  return {
    selectedTeam,
    handleSelectApiTeam,
    handleSelectPlayer,
    handleRemove,
    handleCreate,
    handleUpdate,
    teamName,
    setTeamName,
    selectedPlayers,
  };
};
