import React from 'react'
import {Box, Flex, Heading, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Themes from './Themes';

export default function Header() {
  return (
    <Box padding={3} bg={'black'} position={'sticky'} zIndex={100} top={0} color={'white'} className='shadow-md'>
        <Flex alignItems={''} justifyContent={'space-between'}>
            <Box textAlign={'center'} rounded={5} color={''}>
                <Heading fontWeight={500}>CarBg</Heading>
            </Box>
            <Flex alignItems={'center'} gap={4} fontWeight={600}>
                <Link to='/'>Home</Link>
                <Link to='/'>Blogs</Link>
                <Link to='/'>About Us</Link>
                <Link to='/create-blog'>New Blog</Link>
            </Flex>
            <Themes/>
        </Flex>
    </Box>
  )
}
