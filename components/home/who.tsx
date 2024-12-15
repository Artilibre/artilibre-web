import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Who = () => {
  return (
    <div>
      <div className="container mx-auto my-3 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-3">
        <div className="flex flex-col justify-center space-y-4 p-4 md:space-y-8">
          <h1 className="text-3xl font-semibold">Artilibre c'est quoi ?</h1>
          <p className="opacity-90">
            Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel efficitur. Donec dictum urna vitae urna
            dapibus condimentum. Cras sed turpis leo. Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel
            efficitur. Donec dictum urna vitae urna dapibus condimentum. Cras sed turpis leo.
          </p>
          <Button className="self-center">Créer un compte</Button>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          <Image src="/who.png" alt="Who" layout="responsive" width={500} height={500} className="max-w-xs object-contain md:max-w-md" />
        </div>
      </div>
    </div>
  );
};
