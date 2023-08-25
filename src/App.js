import HomePage from "./components/homePage";
import WelcomePage from "./components/welcomePage";
import { useAddress } from "@thirdweb-dev/react";
import MainLayout from "./layout/MainLayout";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const App = () => {
  const address = useAddress();
  return <MainLayout>{address ? <HomePage /> : <WelcomePage />}</MainLayout>;
};

export default App;
