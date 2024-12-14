import { Footer } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/nav-bar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const HomePage = async () => {
  return (
    <div>
      <NavBar />
      <div className="relative">
        <Image src="/bg-craftman.jpg" alt="Craftman" width="1366" height="768" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container grid grid-cols-3 px-4 text-white">
            <div className="col-span-2">
              <span className="text-6xl font-bold">Trouvez l'artisan parfait pour vos travaux.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-3 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-3">
        <div className="bg-tertiary flex flex-col p-8 text-center text-white md:rounded">
          <h1 className="mb-6 text-3xl font-semibold">Vous cherchez un artisan ?</h1>
          <p className="mb-8 mt-auto opacity-90">
            Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel efficitur. Donec dictum urna vitae urna
            dapibus condimentum. Cras sed turpis leo.
          </p>
          <Button className="self-center">Créer un compte</Button>
        </div>
        <div className="flex flex-col bg-primary p-8 text-center text-white md:rounded">
          <h1 className="mb-6 text-3xl font-semibold">Vous êtes artisan ?</h1>
          <p className="mb-8 mt-auto opacity-90">
            Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel efficitur. Donec dictum urna vitae urna
            dapibus condimentum. Cras sed turpis leo.
          </p>
          <Button variant="inverse" className="self-center">
            Créer un compte
          </Button>
        </div>
      </div>

      <Separator className="container mx-auto mt-10" />

      <Footer />
    </div>
  );
};

export default HomePage;
