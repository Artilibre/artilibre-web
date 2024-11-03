import { Footer } from "@/components/home/footer";
import { NavBar } from "@/components/home/nav-bar";

const HomePage = async () => {
  return (
    <div>
      <NavBar />
      <div className="m-3 flex flex-col">Welcome home page</div>
      <Footer />
    </div>
  );
};

export default HomePage;
