"use client";
import { useMatchStore } from "@/store/match.store";
import React from "react";
import { TeamInfo } from "../team-info/team-info";
import { NotTeamsFound } from "../not-teams-found/not-teams-found";
import { TEAMS_FOR_MATCH } from "@/constant/match-requirements.constant";

export const MatchList = () => {
  const teams = useMatchStore((state) => state.match.teams);
  const [teamOne, teamTwo] = teams;
  if (teams.length < TEAMS_FOR_MATCH) return <NotTeamsFound />;
  return (
    <div className="w-full flex justify-between">
      <TeamInfo team={teamOne} />
      <div className="flex justify-center items-center">
        <h2 className=" text-2xl sm:text-4xl text-center mt-6">VS</h2>
      </div>
      <TeamInfo team={teamTwo} />
    </div>
  );
};
