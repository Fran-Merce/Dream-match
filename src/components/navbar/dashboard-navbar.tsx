"use client";
import { TEAMS_FOR_MATCH } from "@/constant/match-requirements.constant";
import { Routes } from "@/constant/routes.constant";
import { useMatchStore } from "@/store/match.store";
import Link from "next/link";
import React from "react";

export const DashboardNavbar = () => {
  const teams = useMatchStore((state) => state.match.teams);
  return (
    <nav className="flex justify-center h-[60px] bg-slate-600">
      <ul className="flex items-center gap-4">
        <Link href={Routes.MATCH}>Match</Link>
        {teams.length < TEAMS_FOR_MATCH && (
          <Link href={Routes.CREATE_TEAM}>Create Team</Link>
        )}
        <Link href={Routes.TEAMS}>Teams</Link>
      </ul>
    </nav>
  );
};
