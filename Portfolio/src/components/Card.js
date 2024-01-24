import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {


  return (
    <Box backgroundColor="white" borderRadius="lg">
      <Image src={imageSrc} borderRadius="lg"/>
      <VStack color="black" alignItems="left" m="4">
        <Heading my="2" size="md">{title}</Heading>
        <Text color="gray">{description}</Text>
        <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
