import React from 'react'
import {  Flex, Spacer, Link, Heading,Center,Box,Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon, } from '@chakra-ui/react';

import { useColorMode } from "@chakra-ui/color-mode";
import { Link as RouterLink } from 'react-router-dom';


const Landing = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Flex p="4" bg={colorMode === 'light' ? 'transparent' : 'transparent'} color="white" align="center" display="flex"  justify="center" >
    <Center>
      
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" mr="4" color={colorMode === 'light' ? 'black' : 'white'}>
          Home
        </Link>
        <Link as={RouterLink} to="/login" mr="4" color={colorMode === 'light' ? 'black' : 'white'}>
          Login
        </Link>
        <Link as={RouterLink} to="/signup" mr="4" color={colorMode === 'light' ? 'black' : 'white'}>
          Sign Up
        </Link>
        
      </Box>
    </Center>
  </Flex>
  <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Make money from <br />
            <Text as={'span'} color={'green.400'}>
              your audience
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward them
            loyalty points. Give back to your loyal readers by granting them access to
            your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
           
          </Stack>
        </Stack>
      </Container>
  </>
)
  }

export default Landing 
