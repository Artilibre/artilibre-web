import { Footer } from "@/components/home/footer";
import { NavBar } from "@/components/home/nav-bar";
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
      <Footer />
    </div>
  );
};

export default HomePage;
