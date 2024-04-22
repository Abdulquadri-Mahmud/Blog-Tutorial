import React from 'react'
import {Box, Flex, Heading, Text, Image, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Testimonial() {
  return (
    <Flex justifyContent={'space-between'} flexWrap={'wrap'} maxW={{md:'85%', base: '97%'}} rounded={7} mx={'auto'} bg={'gray.200'} color={'black'} my={'3rem'} padding={'1.5rem'}>
      <Box width={{md: '45%', base: '100%'}} borderRight={'2px'} borderRightColor={'black'}>
        <Heading fontWeight={500} fontSize={16}>TESTIMONIALS</Heading>
        <Heading py={5} fontWeight={500} fontSize={35}>What people say <br /> about our blog</Heading>
        <Text fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ullam fuga aspernatur totam unde et.</Text>
      </Box>
      <Box width={{md: '55%', base: '100%'}} pl={{md:4}}>
        <Text fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta quo eius, necessitatibus minus reiciendis ratione voluptatem, officia quasi possimus iste assumenda est illum incidunt eos, sit doloremque molestias sapiente.</Text>
        <Box>
            <Box>
                <Image src='' alt=''/>
            </Box>
            <Box>
                <Text fontWeight={500}>Adeyemi Mahmud</Text>
                <Text fontWeight={500}>Lagos State <br /> Nigeria</Text>
            </Box>
        </Box>
      </Box>
    </Flex>
  )
}
