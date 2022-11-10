import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Square,
  Stack,
  VStack,
} from "@chakra-ui/react";

const Footer = () => {
  const useFulllinks = [
    "Why Licious?",
    "Refer & Earn",
    "Licious Cash & Cash+",
    "Careers",
    "BLOG",
    "Campaign",
    "Bug Bounty Guidelines",
    "About Us",
    "FSSC 22000 Certification",
    "FSSAI Licenses",
    "Sitemap",
  ];

  const contectlinks = [
    "Call: 1800-4190-786",
    "Talktous@licious.com",
    "REGISTERED OFFICE ADDRESS:",
    "House of Licious, Zed Pearl, No 12, Domlur Layout",
    "Bangalore, Karnataka - 560071",
  ];

  const Boxitems = [
    "FAQ",
    "Privacy Policy",
    "HAVE SECURITY CONCERN?",
    "Mail us to:",
    "security@licious.com",
  ];

  return (
    <Box h="450px" border="0px solid " maxW="90%" margin="auto">
      <Flex maxW="15%" alignItems="center" gap="20px">
        <Image
          src="https://img.freepik.com/free-psd/logo-mockup_35913-2089.jpg?w=2000"
          alt="MyLogo"
        />
      </Flex>
      <HStack spacing="24px" marginTop={7}>
        <Box w="18%" h="300px" textAlign="justify">
          <Heading size="xs" marginBottom={2}>
            USEFULL LINKS
          </Heading>
          {useFulllinks.map((elem) => (
            <p>{elem}</p>
          ))}
        </Box>
        <Box w="18%" h="300px" textAlign="justify">
          <Heading size="xs" marginBottom={2}>
            EXPERIENCE LICIOUS APP ON MOBILE
          </Heading>
          <Flex gap={2}>
            <Box>
              <Image
                src="https://www.licious.in/img/rebranding/app-store-new.svg"
                alt="Download"
              />
            </Box>
            <Box>
              <Image
                src="https://www.licious.in/img/rebranding/play-store-new.png"
                alt="Download"
              />
            </Box>
          </Flex>
        </Box>
        <Box w="22%" h="300px" textAlign="justify">
          <Heading size="xs" marginBottom={2}>
            CONTACT US
          </Heading>
          {contectlinks.map((elem) => (
            <p>{elem}</p>
          ))}
        </Box>
        <Box w="18%" h="300px" textAlign="justify">
          <Heading size="xs" marginBottom={2}>
            T&C
          </Heading>
          {Boxitems.map((elem) => (
            <p>{elem}</p>
          ))}
        </Box>
        <Box w="14%" h="300px" textAlign="justify">
          <Image src="https://www.licious.in/img/rebranding/3-dsecure.png" alt='VISA' />
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
