import { Button } from "@/components/ui/button";

export const Twochoices = () => {
  return (
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
  );
};
