import { Box } from "@chakra-ui/react";
import Wrapper from "../components/Body/Wrapper";
import Controler from "../components/Controler/Controler";
import { useControlerContext } from "../context/ControlerContext";

export default function Home() {
  return (
    <Box
      minH="100vh"
      px={["16px"]}
      pt={["16px"]}
      bg="#1B2430"
      color="whiteAlpha.900"
    >
      <Controler />
      <Wrapper />
    </Box>
  );
}
