import { useEffect, useState } from 'react'
import {Box, Flex, Heading, Text, Image, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function AllBlogs() {
    const [blogs, setBlogs] = useState({ });
    const [loading, setLoading] = useState(false);6

    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                setLoading(true);

                const res = await fetch('/api/blogs/getAllBlogs');
        
                const data = await res.json();
    
                setBlogs(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getAllBlogs();

    }, []);

  return (
    <>
        <Flex justifyContent={'center'} alignItems={'center'}>
            {
                loading && (
                    <p className="text-center w-52 h-14 rounded-lg my-10 text-2xl bg-slate-800 text-gray-50 flex justify-center items-center font-semibold">
                        <svg className="animate-spin h-5 w-5 bg-gray-50 mr-3 ... rounded-lg" viewBox="0 0 24 24"></svg>Loading...
                    </p>
                )
            }
        </Flex>
        <Flex justifyContent={{md: 'start', base: 'center'}} flexWrap={'wrap'} gap={3} py={'5rem'} p={4}>
            {
                blogs.length > 0 && !loading ? (
                    blogs.map((blog) => (
                        <Box className="" key={blog._id} width={{base: '100%', md:'32%'}} rounded={10} p={3} bg={'gray.200'} color={'black'}>
                            <Flex justifyContent={'center'} width={'100%'} height={{md: '250px', base: '250px'}}>
                                {
                                    blog.imageUrl ? (
                                        <img src={blog.imageUrl}className='w-[100%] rounded-[5px] h-[100%]' alt='Blog image'/>
                                    ) : ''
                                }
                            </Flex>
                            <Text fontWeight={500} py={2}>{blog.title}</Text>
                            <Text fontWeight={500} textDecor={'underline'} >{blog.snippet}</Text> 
                            <Text fontWeight={500} py={3}>{blog.body}</Text>
                            <Button bg={'#e05b09;'} color={'white'} _hover={{opacity: 0.7}}>Read More</Button>
                        </Box>
                    ))
                ) : (
                    <p>No blogs to display</p>
                )
            }
        </Flex>
    </>
  )
}
