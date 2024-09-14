import { MyApp } from "./myApp/myApp";
import { StateProvider } from "./hooks/context";

const Home = () => {
  return (
    <StateProvider>
      <MyApp />
    </StateProvider>
  );
};

export default Home;
