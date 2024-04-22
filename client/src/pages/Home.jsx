import React from 'react'
import {Box, Flex, Heading,Text } from '@chakra-ui/react';
import AllBlogs from '../components/AllBlogs';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <Box>
        <Hero/>
        <AllBlogs/>
        <Testimonial/>
    </Box>
  )
}
