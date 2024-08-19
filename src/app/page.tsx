import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { Routes } from "@/constant/routes.constant";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-home-image min-h-screen flex-col items-center justify-center">
      <div className="gap-4 md:gap-7 flex flex-col p-4 md:p-0  md:items-center">
        <h1 className="md:text-5x text-4xl font-bold text-black-400">
          Bienvenido a Dream Match
        </h1>
        <h2 className="md:text-5xl text-4xl font-bold text-black-400">
          Crea tu partido soñado
        </h2>
        <Link href={Routes.CREATE_TEAM}>
          <Button className="mt-4 md:mt-8 text-lg">Crear Patido</Button>
        </Link>
      </div>
    </main>
  );
}
