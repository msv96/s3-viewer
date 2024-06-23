import { GridCol, Paper, Stack } from "@mantine/core";
import { IconFile } from "@tabler/icons-react";

type Props = {
  fileName: string;
};

export default function FileCard({ fileName }: Props) {
  return (
    <GridCol span={1}>
      <Paper shadow="xs" p="xs">
        <Stack gap="xs" align="center">
          <IconFile size={48} />
          {fileName}
        </Stack>
      </Paper>
    </GridCol>
  );
}
