import { create } from "zustand";
import { persist } from "zustand/middleware";
import { State } from "./type/match.type";
import { STORE_MATCH_KEY } from "./constant/store-key.constant";

export const useMatchStore = create(
  persist<State>(
    (set) => ({
      match: {
        teams: [],
      },
      setMatch: (match) => set({ match }),
      createTeam: (team) =>
        set((state) => ({
          match: { ...state.match, teams: [...state.match.teams, team] },
        })),

      resetMatch: () => set({ match: { teams: [] } }),
      deleteTeam: (id: string) =>
        set((state) => ({
          match: {
            ...state.match,
            teams: state.match.teams.filter((team) => team.id !== id),
          },
        })),
      updateTeam: (id: string, updates) =>
        set((state) => ({
          match: {
            ...state.match,
            teams: state.match.teams.map((team) =>
              team.id === id ? { ...team, ...updates } : team
            ),
          },
        })),
    }),
    {
      name: STORE_MATCH_KEY,
    }
  )
);
