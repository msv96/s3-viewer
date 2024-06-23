import { AppShell, AppShellHeader, AppShellMain, Loader, Modal, Stack, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";
import SuspenseComponent from "../common/SuspenseComponent";
import { useCommonAction, useCommonState } from "../store/hooks";
import Header from "./components/Header";

export default function Layout() {
  const { loader } = useCommonState();

  const { toggleLoader } = useCommonAction();

  return (
    <AppShell header={{ height: 60 }} padding="md" layout="alt">
      <Modal
        centered
        size="sm"
        opened={loader}
        onClose={toggleLoader}
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <Stack align="center" gap="xl" py="xl">
          <Loader size="lg" />
          <Title order={3}>Loading...</Title>
        </Stack>
      </Modal>
      <AppShellHeader p="md">
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <SuspenseComponent>
          <Outlet />
        </SuspenseComponent>
      </AppShellMain>
    </AppShell>
  );
}
