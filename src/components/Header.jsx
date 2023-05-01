import React from "react";
import { Button, HStack, Link } from "@chakra-ui/react";
function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchange">Exhanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
}

export default Header;
