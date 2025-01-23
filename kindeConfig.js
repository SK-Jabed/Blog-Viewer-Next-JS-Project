import { KindeAuthProvider } from "@kinde-oss/kinde-auth-nextjs";

export const KindeConfig = {
  domain: "https://blogviewernextjs.kinde.com",
  clientId: "e960599954534bdea52717a6df5059db",
  redirectUri: "http://localhost:3000/profile", // Ensure this matches your app's redirect URI
};

export function KindeProviderWrapper({ children }) {
  return <KindeAuthProvider {...KindeConfig}>{children}</KindeAuthProvider>;
}
