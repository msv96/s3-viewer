import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";
import { Outlet } from "react-router-dom";
import SuspenseComponent from "../common/SuspenseComponent";

export default function Layout() {
  return (
    <AppShell header={{ height: 60 }} padding="md" layout="alt">
      <AppShellHeader>Header</AppShellHeader>
      <AppShellMain>
        <SuspenseComponent>
          <Outlet />
        </SuspenseComponent>
      </AppShellMain>
    </AppShell>
  );
}
