import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Érik Albuquerque</Text>
          <Text color="gray.300" fontSize="small">
            erik.albuquerque.oficial@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Érik Albuquerque"
        src="https://github.com/erik-albuquerque.png"
      />
    </Flex>
  );
}
