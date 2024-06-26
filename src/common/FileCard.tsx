import { Paper, Stack } from "@mantine/core";
import { IconFile } from "@tabler/icons-react";

type Props = {
  displayName: string;
  fileName: string;
};

export default function FileCard({ displayName }: Props) {
  return (
    <Paper shadow="xs" p="xs">
      <Stack gap="xs" align="center">
        <IconFile size={48} />
        {displayName}
      </Stack>
    </Paper>
  );
}
