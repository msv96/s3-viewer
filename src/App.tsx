import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundary";
import { queryClient } from "./helpers/query-client";
import { themeOverride } from "./helpers/theme";
import { router } from "./router";

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={themeOverride}>
          <RouterProvider router={router} />
        </MantineProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
