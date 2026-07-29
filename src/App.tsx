import { useSyncExternalStore } from "react";

import { AllVarieties } from "./routes/kaikki";
import { Index } from "./routes";

function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getCurrentRoute() {
  return window.location.hash.replace(/^#/, "") || window.location.pathname;
}

function App() {
  const route = useSyncExternalStore(subscribeToHashChange, getCurrentRoute);

  if (route === "/kaikki") {
    return <AllVarieties />;
  }

  return <Index />;
}

export default App;
