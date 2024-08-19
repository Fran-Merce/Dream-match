import { ApiTeam } from "./type/api-team.type";
import { AxiosClient } from "./axios.client";
import toast from "react-hot-toast";
import { Routes } from "@/constant/routes.constant";

class PlayersApi {
  static readonly getTeams = async () => {
    const ARGENTINA_LEAGUE_ID = 44;
    try {
      const response = await AxiosClient.get<ApiTeam[]>(
        `https://apiv3.apifootball.com/?action=get_teams&league_id=${ARGENTINA_LEAGUE_ID}`,
        {
          responseType: "json",
        }
      );

      return response.data;
    } catch (error) {
      toast.error("Error fetching teams, redirecting to home");
      window.location.href = Routes.HOME;
    }
  };
}

export default PlayersApi;
