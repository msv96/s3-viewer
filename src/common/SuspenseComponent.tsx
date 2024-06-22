import { Box, Loader } from "@mantine/core";
import { ReactNode, Suspense } from "react";

type Props = {
  children: ReactNode;
};

export default function SuspenseComponent(props: Props) {
  const { children } = props;

  return (
    <Suspense
      fallback={
        <Box
          maw={"100%"}
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader size={"lg"} />
        </Box>
      }
    >
      {children}
    </Suspense>
  );
}
