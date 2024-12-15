import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="relative">
      <div className="relative h-[35vh] w-full md:h-[50vh] lg:h-[65vh]">
        <Image src="/bg-craftman.jpg" alt="Craftman" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container grid grid-cols-3 px-4 text-white">
          <div className="col-span-2">
            <span className="text-2xl font-bold md:text-4xl lg:text-6xl">Trouvez l'artisan parfait pour vos travaux.</span>
            <div className="mt-4 flex h-10 space-x-2 md:h-12">
              <Input placeholder="Rechercher un artisan" className="w-full" />
              <Button className="h-full">
                <SearchIcon className="h-4 w-4" />
                <span className="hidden md:inline">Rechercher</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
