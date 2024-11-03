"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";
import { injected, walletConnect } from "@wagmi/connectors";
import { type Chain } from "viem";

export const aiachain: Chain = {
  id: 1320,
  name: "AIA Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "AIA",
    symbol: "AIA",
  },
  rpcUrls: {
    default: { http: ["https://aia-dataseed1-testnet.aiachain.org"] },
  },
  blockExplorers: {
    default: { name: "AIA Chain", url: "https://testnet.aiascan.com/" }
  },
  testnet: true,
};


export const config = createConfig(
  getDefaultConfig({
    connectors: [
      injected(),
      walletConnect({
        showQrModal: false,
        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
      }),
    ],
    transports: {
      [aiachain.id]: http(aiachain.rpcUrls.default.http[0]), // Extract the first URL string
    },
    // Your dApps chains
    chains: [aiachain],

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

    // Required App Info
    appName: "AIA Pump",

    // Optional App Info
    appDescription:  "AIA Pump meme coin gen",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          theme="retro"
          mode="dark"
          customTheme={{
            "--ck-connectbutton-font-size": "8px",
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
