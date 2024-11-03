import { NavBar } from "@/components/home/nav-bar";

const HomePage = async () => {
  return (
    <div>
      <NavBar />
      <div className="m-3 flex flex-col">Welcome home page</div>
    </div>
  );
};

export default HomePage;
