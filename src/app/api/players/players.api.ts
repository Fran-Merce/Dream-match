import { ApiTeam } from "./type/api-team.type";
import { AxiosClient } from "./axios.client";
import { ApiActions } from "./constant/api-actions.constant";

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
      throw new Error("Error fetching teams from api");
    }
  };
}

export default PlayersApi;
