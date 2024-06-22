import { Anchor, Box, Group } from "@mantine/core";
import { IconBrowser } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <Group align="center">
        <Anchor component={NavLink} to="/home" title="Home page link" h="27px">
          <IconBrowser />
        </Anchor>
      </Group>
    </Box>
  );
}
