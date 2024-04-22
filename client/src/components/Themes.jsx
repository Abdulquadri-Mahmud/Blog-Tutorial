import { useColorMode } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';
import { MoonIcon,SunIcon } from '@chakra-ui/icons';

export default function Themes() {
    const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button width={'full'} onClick={toggleColorMode} color={useColorModeValue('black', 'white')}
       bg={useColorModeValue('white', 'gray.800')}>
        {
            colorMode === 'light' ? 
            <span >
              <MoonIcon color={useColorModeValue('black', 'white')}/> <span>Dark</span> 
            </span> : 
            <span>
              <SunIcon color={useColorModeValue('black', 'white')}/> <span>Light</span>
            </span>
        }
      </Button>
    </Box>
  )
}
