import { lazy, Suspense, useEffect } from "react";
import { ClientOnly } from "@tanstack/react-router";

const LegacyApp = lazy(() => import("@/App"));

// Mounts the imported Clinexus app (react-router based) unchanged inside the
// TanStack Start shell. ClientOnly keeps browser-only APIs out of SSR.
export function LegacyAppHost() {
  useEffect(() => { console.log("MOUNT LegacyAppHost", performance.now()); return () => console.log("UNMOUNT LegacyAppHost", performance.now()); }, []);
  return (
    <ClientOnly fallback={null}>
      <Suspense fallback={null}>
        <LegacyApp />
      </Suspense>
    </ClientOnly>
  );
}
