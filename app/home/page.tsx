import { Twochoices } from "@/components/home/two-choices";
import { What } from "@/components/home/what";
import { Who } from "@/components/home/who";
import { Footer } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const HomePage = async () => {
  return (
    <div>
      <NavBar />
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

      <What />
      <Who />

      <Twochoices />

      <Separator className="container mx-auto mt-10" />

      <Footer />
    </div>
  );
};

export default HomePage;
