import React from 'react'
import {Box, Flex, Heading,Text, Stack, Button } from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/img/coolest-car.webp';
import img2 from '../assets/img/honda-prelude-concep.jpg';
import img3 from '../assets/img/modern-sports-car.avif';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", 
            
        }}
        onClick={onClick}
      />
    );
  }

export default function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <Box h={{md:'90vh', base: '100vh'}} w={'full'}>
      
        <Slider {...settings}>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img1})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.4} bgBlendMode="multiply"/>

                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:10}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full',md: '100%', xl: '40%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} >Your Journey</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} >Your Car</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} >Your Dream</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:16, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img2})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.4} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:10}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full',md: '100%', xl: '40%'}}>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} >Your Journey</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} >Your Car</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} >Your Dream</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:16, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="bottom" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img3})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.4} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 5, md:10}} zIndex={20} >
                    <Stack flexDirection={'column'} w={{base:'full',md: '100%', xl: '40%'}}>
                    <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} >Your Journey</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} >Your Car</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }} >Your Dream</Heading>
                        <Text color={'white'} zIndex={10} fontSize={{md:16, base: 16}} pt={{md:6, base: 3}} fontWeight={500}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'green.600'} color={'white'} _hover={{bg : 'green.600'}}>
                              <Link to='/about'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            
        </Slider>
    </Box>
  )
}
