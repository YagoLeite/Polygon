import { Box } from "@chakra-ui/react";
import Wrapper from "../components/Body/Wrapper";
import Controler from "../components/Controler/Controler";
import { useControlerContext } from "../Context/Context";

export default function Home() {
  return (
    <Box>
      <Controler />
      <Wrapper />
    </Box>
  );
}
