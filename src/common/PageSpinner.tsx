import { Flex, Loader } from "@mantine/core";

export function PageSpinner() {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Loader color="violet" size="lg" />
    </Flex>
  );
}
