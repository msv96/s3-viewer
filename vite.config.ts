import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: {
          axios: ["axios"],
          dayjs: ["dayjs"],
          icons: ["@tabler/icons-react"],
          mantine: [
            "@mantine/core",
            "@mantine/form",
            "@mantine/hooks",
            "@mantine/modals",
            "@mantine/notifications",
          ],
          others: ["lodash", "query-string"],
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          tanstack: ["@tanstack/react-query"],
          zustand: ["zustand"],
        },
      },
    },
  },
});
