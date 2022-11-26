import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { TextButton } from "./Button/TextButton";

import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
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
        {isMobile ? (
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <IconButton aria-label="menu" icon={<AiOutlineMenu />} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <TextButton>Início</TextButton>
                <TextButton>Blog</TextButton>
                <TextButton>Sobre</TextButton>
                <TextButton>Equipe</TextButton>
                <TextButton>Contato</TextButton>
                <TextButton>Projetos</TextButton>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Stack direction={"row"} spacing={10}>
            <TextButton>Início</TextButton>
            <TextButton>Blog</TextButton>
            <TextButton>Sobre</TextButton>
            <TextButton>Equipe</TextButton>
            <TextButton>Contato</TextButton>
            <TextButton>Projetos</TextButton>
          </Stack>
        )}
      </Container>
    </Flex>
  );
};
