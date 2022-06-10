import { Text, Stack } from "@chakra-ui/react";

export const PrivateContent = ({ user }) => {
  return (
    <Stack spacing={3}>
      <Text fontSize="3xl">Hello {user}</Text>
      <Text fontSize="2xl">Welcome to the Ion Group secret party</Text>
      <Text fontSize="xl">Party will be organised on 15 June 2022</Text>
      <Text fontSize="xl">Venue: October 21 str 110, Berlin</Text>
      <Text fontSize="sm">See you there :)</Text>
    </Stack>
  );
};
