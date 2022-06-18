import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useControlerContext } from "../../context/ControlerContext";
const SpinningIcon = (props) => {
  const {
    state: { verticeDiv, smallDivRotationAnim },
  } = useControlerContext();

  return (
    <Flex
      justify="center"
      alignItems="center"
      position="absolute"
      h={verticeDiv}
      w={verticeDiv}
      bg="white"
      //   bgGradient="radial(#ffffff , #505556 )"
      fontWeight="500"
      fontSize={["16px", "24px"]}
      color="black"
      borderRadius="50%"
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      animate={
        smallDivRotationAnim
          ? {
              rotate: -360,
              transition: {
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              },
            }
          : {}
      }
      key={Math.random()}
      {...props.config}
    >
      {props.children}
    </Flex>
  );
};

export default SpinningIcon;
