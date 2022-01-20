import { Flex, SimpleGrid } from "@chakra-ui/react";

import { Charts } from "../components/Charts";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" mx="auto" px="6" maxW={1400}>
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Charts>Inscritos da semana</Charts>
          <Charts> Taxa de abertura</Charts>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
