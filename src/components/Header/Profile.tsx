import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Érik Albuquerque</Text>
        <Text color="gray.300" fontSize="small">
          erik.albuquerque.oficial@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Érik Albuquerque"
        src="https://github.com/erikalbuquerque.png"
      />
    </Flex>
  );
}
