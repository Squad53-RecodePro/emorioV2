import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PrimaryButton } from "../Button/PrimaryButton";

import Router from "next/router";

interface Props {
  title: string;
  description: string;
  tag: string;
  image: string;
  route: string;
}

export const ArticleCard = ({
  title,
  description,
  tag,
  image,
  route,
}: Props) => {
  return (
    <Card maxW="sm">
      <CardHeader>
        <Image objectFit="cover" src={image} alt={title} borderRadius="lg" />
      </CardHeader>
      <CardBody>
        <Badge bg={"orange.100"} color={"white"} p={3}>
          {tag}
        </Badge>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color={"gray.200"} fontSize={"sm"}>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <PrimaryButton onClick={() => Router.push(`${route}`)}>
          Ver Artigo
        </PrimaryButton>
      </CardFooter>
    </Card>
  );
};
