import { useSyncExternalStore } from "react";

import { AllVarieties } from "./routes/kaikki";
import { SensoryTool } from "./routes/havainto";
import { Index } from "./routes";

function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

function getCurrentRoute() {
  const hashRoute = window.location.hash.replace(/^#/, "");

  if (hashRoute.startsWith("/")) {
    return hashRoute;
  }

  const path = window.location.pathname.replace(/\/+$/, "");

  if (path.endsWith("/kaikki")) {
    return "/kaikki";
  }

  if (path.endsWith("/havainto")) {
    return "/havainto";
  }

  return "/";
}

function App() {
  const route = useSyncExternalStore(subscribeToHashChange, getCurrentRoute);

  if (route === "/kaikki") {
    return <AllVarieties />;
  }

  if (route === "/havainto") {
    return <SensoryTool />;
  }

  return <Index />;
}

export default App;
