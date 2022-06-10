import {Text, Stack} from "@chakra-ui/react";

export const Welcome = () => {
  return (
    <Stack spacing={3}>
        <Text fontSize='2xl'>Welcome to the Ion Group secret party</Text>
        <Text fontSize='lg'>To view the venue and date of secret party, please login</Text>
    </Stack>
  );
};
