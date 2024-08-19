import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Routes } from "@/constant/routes.constant";

interface Props {
  text?: string;
}
export const NotTeamsFound = ({ text }: Props) => {
  const DEFAULT_TEXT = "Please create at least 2 teams, to start the match";
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl text-center mt-6">{text ?? DEFAULT_TEXT}</h1>
      <Button>
        <Link href={Routes.CREATE_TEAM}>Create Team</Link>
      </Button>
    </div>
  );
};
