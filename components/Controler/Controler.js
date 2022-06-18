import { Flex, Input, Text, Checkbox, Box } from "@chakra-ui/react";
import React from "react";
import { useControlerContext } from "../../context/ControlerContext";

const Controler = () => {
  const { state, dispatch } = useControlerContext();
  return (
    <Box mb="200px">
      <Flex justify="space-around" h="50px">
        <Flex>
          <Text>Number of sides</Text>
          <Input
            type="number"
            onChange={(e) =>
              dispatch({ type: "SIDES-UPDATE", value: +e.target.value })
            }
            placeholder={state.sides}
          />
        </Flex>
        <Flex>
          <Text>Size of your div</Text>
          <Input
            type="number"
            onChange={(e) =>
              dispatch({ type: "DIV-UPDATE", value: +e.target.value })
            }
            placeholder={state.divSize}
          />
        </Flex>
        <Flex>
          <Text>Tamanho dar bolinha</Text>
          <Input
            type="number"
            onChange={(e) =>
              dispatch({ type: "VERTICEDIV-UPDATE", value: +e.target.value })
            }
            placeholder={state.verticeDiv}
          />
        </Flex>
        <Flex>
          <Text>Color</Text>
          <Input
            type="color"
            onChange={(e) =>
              dispatch({ type: "COLOR-UPDATE", value: e.target.value })
            }
          />
        </Flex>
      </Flex>
      <Flex justify="space-around" h="50px">
        <Checkbox
          isChecked={state.bigDivRotationAnim}
          onChange={(e) =>
            dispatch({ type: "BIGDIVANIM-UPDATE", value: e.target.checked })
          }
        >
          Big div Anim
        </Checkbox>
        <Checkbox
          isChecked={state.smallDivRotationAnim}
          onChange={(e) =>
            dispatch({ type: "SMALLDIVANIM-UPDATE", value: e.target.checked })
          }
        >
          Small div Anim
        </Checkbox>
        <Checkbox
          isChecked={state.fadeInAnim}
          onChange={(e) =>
            dispatch({ type: "FADEIN-UPDATE", value: e.target.checked })
          }
        >
          Fade-In Anim
        </Checkbox>
      </Flex>
    </Box>
  );
};

export default Controler;
