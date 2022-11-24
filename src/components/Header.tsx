import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { TextButton } from "./Button/TextButton";

export const Header = () => {
  return (
    <Flex position={"fixed"} zIndex={5} w={"full"} h={"100px"} bg={"gray.100"}>
      <Container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxWidth={"container.xl"}
      >
        <Box>
          <Image
            boxSize="100px"
            objectFit="contain"
            src="/images/logo-principal.png"
            alt="Logo"
          />
        </Box>
        <Stack direction={"row"} spacing={10}>
          <TextButton>Início</TextButton>
          <TextButton>Blog</TextButton>
          <TextButton>Sobre</TextButton>
          <TextButton>Equipe</TextButton>
          <TextButton>Contato</TextButton>
          <TextButton>Projetos</TextButton>
        </Stack>
      </Container>
    </Flex>
  );
};
