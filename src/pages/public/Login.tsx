import {
  Button,
  Group,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

type TFormValues = {
  accessId: string;
  secretKey: string;
};

export default function Login() {
  const { getInputProps, onSubmit } = useForm<TFormValues>({
    initialValues: {
      accessId: "",
      secretKey: "",
    },
    validate: {
      accessId: (val) => {
        return val.length <= 10 ? "Invalid Access Id" : null;
      },
      secretKey: (val) => {
        return val.length <= 10 ? "Invalid Secret Key" : null;
      },
    },
  });

  const handleFormSubmit = (values: TFormValues) => {
    console.log(values);
  };

  return (
    <Stack h="100vh" align="center" justify="center" gap="md">
      <Paper withBorder radius="md" p="xl" w="400px">
        <Title size="h2" mb="xl">
          Login to your S3 bucket
        </Title>
        <form onSubmit={onSubmit(handleFormSubmit)}>
          <Stack>
            <TextInput
              required
              type="text"
              label="AWS Access Id"
              placeholder="Your access id"
              {...getInputProps("accessId")}
            />

            <PasswordInput
              required
              label="AWS Secret Key"
              placeholder="Your secret key"
              {...getInputProps("secretKey")}
            />
          </Stack>
          <Group justify="flex-end" mt="xl">
            <Button type="submit" radius="md">
              Authenticate
            </Button>
          </Group>
        </form>
      </Paper>
    </Stack>
  );
}
