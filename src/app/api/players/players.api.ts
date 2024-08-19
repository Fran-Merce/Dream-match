import { ApiTeam } from "./type/api-team.type";
import { AxiosClient } from "./axios.client";
import toast from "react-hot-toast";
import { Routes } from "@/constant/routes.constant";
import { ApiActions } from "./constant/api-actions.constant";
import { redirect } from "next/navigation";

class PlayersApi {
  static readonly getTeams = async () => {
    const ARGENTINA_LEAGUE_ID = 44;
    try {
      const response = await AxiosClient.get<ApiTeam[]>("/", {
        params: {
          APIkey: process.env.NEXT_PLAYERS_API_KEY,
          action: ApiActions.GET_TEAMS,
          league_id: ARGENTINA_LEAGUE_ID,
        },
      });

      return response.data;
    } catch (error) {
      toast.error("Error fetching teams, redirecting to home");
      redirect(Routes.HOME);
    }
  };
}

export default PlayersApi;
