import { MatchList } from "@/components/match/match-list";

export default function Match() {
  return (
    <div className="max-h-screen px-5">
      <h1 className="text-4xl text-center mt-6">Dream Match</h1>
      <MatchList />
    </div>
  );
}
