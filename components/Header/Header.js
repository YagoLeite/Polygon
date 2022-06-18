import { Flex, Icon, Link, Box } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
import WavyText from "../WavyText";

const Header = () => {
  const github = (
    <Flex
      pr={["16px", "16px", "24px", "48px", "48px"]}
      alignItems="center"
      justifyContent="flex-end"
      gap={["8px", "8px", "24px"]}
    >
      <Link
        isExternal
        aria-label="Go to Yago's Leite GitHub page"
        href="https://github.com/YagoLeite/Polygon"
      >
        <Icon
          as={AiFillGithub}
          display="block"
          transition="color 0.2s"
          w="5"
          h="5"
          _hover={{ color: "gray.600" }}
        />
      </Link>
    </Flex>
  );
  return (
    <Flex mb="16px" w="100%" justify="space-between" align="center">
      <Flex pl="50px" color="#08fdd8">
        <WavyText fontSize="32px" text="Made by:" delayDuration={1} />
        <Box opacity="0">aa</Box>
        <WavyText fontSize="32px" text="Yago Leite" delayDuration={1.7} />
      </Flex>
      {/* <Box></Box> */}
      {github}
    </Flex>
  );
};

export default Header;
