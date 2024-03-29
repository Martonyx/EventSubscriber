import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const activeChain = {
  chainId: 8081,
  rpc: ["https://dapps.shardeum.org"],
  nativeCurrency: {
    decimals: 18,
    name: "	Shardeum Sphinx Dapp 1.X",
    symbol: "SHM",
  },
  shortName: "Shardeum",
  slug: "Shardeum",
  testnet: true,
  name: "Shardeum Sphinx Dapp 1.X",
};

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <React.StrictMode>
          <ThirdwebProvider activeChain={activeChain}>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </ThirdwebProvider>
        </React.StrictMode>
      </div>
    ),
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
