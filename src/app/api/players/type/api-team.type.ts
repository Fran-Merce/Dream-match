import { ApiPlayer } from "./api-player.type";

export interface ApiTeam {
  team_key: string;
  team_name: string;
  team_country: string;
  team_founded: string;
  team_badge: string;
  venue: Venue;
  coaches: Coach[];
  players: ApiPlayer[];
}

export interface Venue {
  venue_name: string;
  venue_address: string;
  venue_city: string;
  venue_capacity: string;
  venue_surface: string;
}

export interface Coach {
  coach_name: string;
  coach_country: string;
  coach_age: string;
}
