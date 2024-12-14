import { Button } from "@/components/ui/button";
import Image from "next/image";

export const What = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto my-3 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-3">
        <div className="flex w-full items-center justify-center p-4">
          <Image src="/what.png" alt="What" layout="responsive" width={500} height={500} className="max-w-xs object-contain md:max-w-md" />
        </div>
        <div className="flex flex-col justify-center space-y-4 p-4 md:space-y-8">
          <h1 className="text-3xl font-semibold text-white">Artilibre c'est quoi ?</h1>
          <p className="text-white opacity-90">
            Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel efficitur. Donec dictum urna vitae urna
            dapibus condimentum. Cras sed turpis leo. Nulla libero purus, vestibulum nec maximus id, suscipit vel enim. Quisque scelerisque consequat lorem vel
            efficitur. Donec dictum urna vitae urna dapibus condimentum. Cras sed turpis leo.
          </p>
          <Button variant="inverse" className="self-center">
            Tous nos artisans
          </Button>
        </div>
      </div>
    </div>
  );
};
