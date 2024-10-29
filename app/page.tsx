import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Tu es artisan ?</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Une révolution se prépare et tu peux faire partie de l'aventure avant tout le monde
      </p>
      <Button className="bg-[#0f172a] text-white hover:bg-[#1e293b] px-6 py-3 rounded-md text-lg font-medium">
        Se connecter / S'inscrire
      </Button>
    </div>
  );
}
