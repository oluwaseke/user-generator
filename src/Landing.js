import { Box, Center } from '@chakra-ui/react';

import React from 'react';

function Landing() {
  return (
    <Box>
      <Center h="100vh">
        <Center p={2} borderWidth="1px" borderRadius="lg" w="30vmin" h="20vmin">
          Hi
        </Center>
      </Center>
    </Box>
  );
}

export default Landing;
