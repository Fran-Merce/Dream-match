import { MatchList } from "@/components/match/match-list";

export default function Match() {
  return (
    <div className="min-h-[calc(100vh-60px)] bg-match-background px-5">
      <h1 className="text-4xl text-center pt-6 text-white">Dream Match</h1>
      <MatchList />
    </div>
  );
}
