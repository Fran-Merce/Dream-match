export type Team = {
  name: string;
  id: string;
  players: string[];
};
export type Match = {
  teams: Team[];
};

export type State = {
  match: Match;
  deleteTeam: (id: string) => void;
  setMatch: (match: Match) => void;
  createTeam: (team: Team) => void;
  resetMatch: () => void;
  updateTeam: (id: string, updates: Partial<Omit<Team, "id">>) => void;
};
