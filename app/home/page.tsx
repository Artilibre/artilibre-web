import { Search } from "@/components/home/search";
import { Twochoices } from "@/components/home/two-choices";
import { What } from "@/components/home/what";
import { Who } from "@/components/home/who";
import { Footer } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/nav-bar";
import { Separator } from "@/components/ui/separator";

const HomePage = async () => {
  return (
    <div>
      <NavBar />

      <Search />
      <What />
      <Who />
      <Twochoices />

      <Separator className="container mx-auto mt-10" />

      <Footer />
    </div>
  );
};

export default HomePage;
