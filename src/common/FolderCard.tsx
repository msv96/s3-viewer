import { Paper, Stack } from "@mantine/core";
import { IconFolderFilled } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

type Props = {
  displayName: string;
  folderName: string;
};

export default function FolderCard({ displayName, folderName }: Props) {
  return (
    <Paper
      component={NavLink}
      to={`/home?Prefix=${folderName}`}
      shadow="xs"
      p="xs"
      c="dark"
    >
      <Stack gap="xs" align="center">
        <IconFolderFilled size={48} />
        {displayName.replace("/", "")}
      </Stack>
    </Paper>
  );
}
