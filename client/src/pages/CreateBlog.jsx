import React, { useEffect, useRef, useState } from 'react';
import {Box, Flex, Heading,Text } from '@chakra-ui/react';
import { app } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
 
export default function CreateBlog() {
  const [ file, setFile] = useState(undefined);
  const [ fileError, setFileError ] = useState(false);
  const [filePercentage, setFilePercentage ] = useState(0);
  const [formData, setFormData] = useState({});

  let navigate = useNavigate();

  const fileRef = useRef(null);

  useEffect(() => {
    if (file) {
      handleUploadFile(file);
    }
  }, [file]);
  // handle uplaod file
  const handleUploadFile = (file) => {
    // getting all firebase methods needed
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePercentage(Math.round(progress));
      console.log(Math.round(progress));
    },(error) => {
      setFileError(true);
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData({...formData, imageUrl: downloadURL});
      })
    }
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  }
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/blogs/postBlog', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      navigate('/');

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Box maxW={{md:'80%', base: '100%'}} mx={'auto'} my={'2rem'} rounded={5} bg={'gray.200'} className='shadow-md p-7'>
        <form className='flex justify-between flex-wrap gap-2' onSubmit={handleSubmit}>
            <Box width={{md: '55%', base: '100%'}}>
              <Box className='my-3'>
                <label htmlFor="title">Blog title: </label><br/>
                <input type="text" onChange={handleChange} id="title" placeholder="Blog title" name="title" required className=' p-2 w-[100%] my-2 rounded-[5px]'/>
              </Box>
              <Box className='my-3'>
                <label htmlFor="snippet">Blog snippet: </label><br/>
                <input type="text" onChange={handleChange} id="snippet" placeholder="Blog snippet" name="snippet" required className=' p-2 w-[100%] my-2 rounded-[5px]'/>
              </Box>
              <Box className='my-3'>
                  <label htmlFor="body">Blog body: </label><br/>
                  <textarea type="text" onChange={handleChange} id="body" placeholder="Blog body" name="body" required className=' p-2 w-[100%] my-2 rounded-[5px] h-[150px]'></textarea>
              </Box>
              <button type='submit' className='w-[100px] py-2 rounded-[5px] bg-black text-white'>Submit</button>
            </Box>

            <Box width={{md: '40%', base: '100%'}} className="mt-5">
              <input type="file" onChange={(e) => setFile(e.target.files[0])} ref={fileRef} className='hidden'/>
              <Box onClick={() => fileRef.current.click()} bg={'black'} cursor={'pointer'} height={'250px'} rounded={5}>
                <img src={formData.imageUrl} className='max-w-[100%] h-[250px] shadow-md rounded-md'/>
              </Box>
              <Box mt={4}>
                <Text fontWeight={500}>Status: 
                  {
                    fileError ? (<span>Error while uploading image</span>) : 
                    filePercentage > 0 && filePercentage < 100 ? (<span>{`Uploading is ${filePercentage}% done`}</span>) : 
                    filePercentage === 100 ? (<span>Uploaded</span>) : ''
                  }
                </Text>
              </Box>
            </Box>
        </form>
      </Box> 
    </>
  )
}
