import { ActionIcon, Anchor, Group, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { useUserAction, useUserState } from "../../store/hooks";

export default function Header() {
  const { isLoggedIn } = useUserState();
  const { logout } = useUserAction();

  return (
    <Group align="center" justify="space-between">
      <Anchor component={NavLink} to="/home" title="Home" underline="never">
        <Group align="center" gap="xs">
          <Text component="div" fw={700} fz="lg">
            S3 Viewer
          </Text>
        </Group>
      </Anchor>
      {isLoggedIn ? (
        <ActionIcon
          variant="subtle"
          color="red"
          title="Logout"
          onClick={() => logout()}
        >
          <IconLogout />
        </ActionIcon>
      ) : null}
    </Group>
  );
}
