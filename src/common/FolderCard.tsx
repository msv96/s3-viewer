import { GridCol, Paper, Stack } from "@mantine/core";
import { IconFolderFilled } from "@tabler/icons-react";

type Props = {
  folderName: string;
};

export default function FolderCard({ folderName }: Props) {
  return (
    <GridCol span={1}>
      <Paper shadow="xs" p="xs">
        <Stack gap="xs" align="center">
          <IconFolderFilled size={48} />
          {folderName.replace("/", "")}
        </Stack>
      </Paper>
    </GridCol>
  );
}
