import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
const SpinningIcon = (props) => {
  return (
    <Flex
      justify="center"
      alignItems="center"
      position="absolute"
      h="50px"
      w="50px"
      bg="white"
      fontWeight="500"
      color="black"
      borderRadius="50%"
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      animate={{
        rotate: -360,
        transition: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        },
      }}
      key={Math.random()}
      {...props.config}
    >
      {props.children}
    </Flex>
  );
};

export default SpinningIcon;
