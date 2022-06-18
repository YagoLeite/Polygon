import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useControlerContext } from "../../context/ControlerContext";
import SpinningIcon from "./SpinningIcon";
import {
  findingAngles,
  arrayOfPositions,
  topAndLeft,
} from "../../helpers/Helpers";
import Code from "./Code";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.35 },
  },
};

const fading = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Wrapper = () => {
  const { state } = useControlerContext();
  console.log(Math.round(state.verticeDiv / 2));

  const positionArray = topAndLeft(
    arrayOfPositions(findingAngles(state.sides || 0))
  );
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      justify="center"
      alignItems="center"
      mt={["150px"]}
    >
      <Flex fontSize="24px" w="100%" justify="center" alignItems="center">
        <Box
          as={motion.div}
          key={Math.random()}
          bgGradient="radial(#6dd5ed,#181d1e)"
          animate={
            state.bigDivRotationAnim
              ? {
                  rotate: 360,
                  transition: {
                    duration: 17,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }
              : {}
          }
          h={state.divSize}
          w={state.divSize}
          position="relative"
          borderRadius="50%"
        >
          <Box
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {positionArray.map((position, index) => {
              return (
                <Box
                  key={Math.random()}
                  as={motion.div}
                  variants={state.fadeInAnim ? fading : ""}
                >
                  <SpinningIcon
                    config={{
                      top: `calc(${position.top}% - ${Math.round(
                        state.verticeDiv / 2
                      )}px)`,
                      left: `calc(${position.left}% - ${Math.round(
                        state.verticeDiv / 2
                      )}px)`,
                    }}
                    key={index}
                  >
                    {index}
                  </SpinningIcon>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>

      {/* <Code positions={positionArray} /> */}
    </Flex>
  );
};

export default Wrapper;
