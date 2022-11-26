import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TextButton } from "./Button/TextButton";

import { AiOutlineMenu } from "react-icons/ai";

import Router from "next/router";

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
            onClick={() => Router.push("/")}
            cursor="pointer"
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
            <PopoverContent w={200}>
              <PopoverArrow />
              <PopoverBody>
                <Stack>
                  <TextButton onClick={() => Router.push("/")}>
                    Início
                  </TextButton>
                  <TextButton onClick={() => Router.push("/blog")}>
                    Blog
                  </TextButton>
                  <TextButton>Sobre</TextButton>
                  <TextButton>Equipe</TextButton>
                  <TextButton>Contato</TextButton>
                  <TextButton>Projetos</TextButton>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Stack direction={"row"} spacing={10}>
            <TextButton onClick={() => Router.push("/")}>Início</TextButton>
            <TextButton onClick={() => Router.push("/blog")}>Blog</TextButton>
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
