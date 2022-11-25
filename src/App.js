import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Users from './Users';

function App() {
  return (
    <ChakraProvider>
      <Users />
    </ChakraProvider>
  );
}

export default App;
