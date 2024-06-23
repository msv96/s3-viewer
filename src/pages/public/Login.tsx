import {
  Button,
  Group,
  Paper,
  PasswordInput,
  Select,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAction } from "../../store/hooks";
import { TLoginFormValues } from "../../types/global";
import { useS3Auth } from "../common-hooks";
import { useFetchRegions } from "./login-hooks";

export default function Login() {
  const navigate = useNavigate();

  const [auth, setAuth] = useS3Auth();
  const { login } = useUserAction();

  const { data } = useFetchRegions();

  const { getInputProps, setFieldValue, onSubmit } = useForm<TLoginFormValues>({
    initialValues: {
      accessId: "",
      secretKey: "",
      bucketName: "",
      region: "",
    },
    validate: {
      accessId(val) {
        return val.length <= 10 ? "Invalid Access Id" : null;
      },
      secretKey(val) {
        return val.length <= 10 ? "Invalid Secret Key" : null;
      },
      bucketName(val) {
        return val.length <= 0 ? "Invalid Bucket Name" : null;
      },
      region(val) {
        return val.length <= 0 ? "Invalid Region" : null;
      },
    },
  });

  const handleFormSubmit = (values: TLoginFormValues) => {
    login(values);
    setAuth({ bucketName: values.bucketName, region: values.region });
    navigate("/home");
  };

  useEffect(() => {
    if (auth.bucketName && auth.region) {
      setFieldValue("bucketName", auth.bucketName);
      setFieldValue("region", auth.region);
    }
  }, [auth, setFieldValue]);

  return (
    <Stack h="80vh" align="center" justify="center" gap="md">
      <Paper withBorder radius="md" p="xl" w="400px">
        <Title size="h2" mb="xl">
          Login to your S3 bucket
        </Title>
        <form onSubmit={onSubmit(handleFormSubmit)}>
          <Stack>
            <TextInput
              withAsterisk
              type="text"
              label="AWS Access ID"
              placeholder="Your access id"
              {...getInputProps("accessId")}
            />
            <PasswordInput
              withAsterisk
              label="AWS Secret Key"
              placeholder="Your secret key"
              {...getInputProps("secretKey")}
            />
            <TextInput
              withAsterisk
              type="text"
              label="Bucket Name"
              placeholder="Your bucket name"
              {...getInputProps("bucketName")}
            />
            <Select
              withAsterisk
              searchable
              checkIconPosition="right"
              allowDeselect={false}
              data={data || []}
              label="Region"
              placeholder="Select the region..."
              {...getInputProps("region")}
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
