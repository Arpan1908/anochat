import React from 'react'
import { HStack, VStack,Heading,Input,Button,Divider, TabList,Tab,Text} from '@chakra-ui/react'
import {ChatButton, ChatIcon} from '@chakra-ui/icons'

const Sidebar = () => {
  return (
    <VStack py="1.5rem">
        <HStack justify="space-evenly">
            <Heading size="md">
                Chats
            </Heading>
            <Button variant="outline" colorScheme='teal'>
                <ChatIcon />
            </Button>
            
        </HStack>
        <Divider />
        <HStack spacing="3">
        <Input variant='filled' placeholder='Search or start a new chat' width="400px" colorScheme='teal' />
        </HStack>
        <VStack as={TabList}>
            <HStack as={Tab}  >
                <Text>John Doe</Text>
            </HStack>
            <HStack as={Tab}>
                <Text>John Doe</Text>
            </HStack>
            <HStack as={Tab}>
                <Text>John Doe</Text>
            </HStack>
            <HStack as={Tab}>
                <Text>John Doe</Text>
            </HStack>
        </VStack>
    </VStack>
  )
}

export default Sidebar
