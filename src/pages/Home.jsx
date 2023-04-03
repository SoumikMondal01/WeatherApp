import React, { useState } from 'react'
import {Box} from '@mui/material';
import styled from '@emotion/styled';
import sideImage from '../assets/images/sideImage.jpg'
import bodyImage from '../assets/images/bodyImage.jpg'
import Form from '../components/Form';
import Information from '../components/Information';

const Component= styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})
const Image = styled(Box)({
    backgroundImage: `url(${sideImage})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Container = styled(Box)({
    backgroundImage: `url(${bodyImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
})
const Home = () => {
    const [result, setResult] = useState({});
  return (
    <Component>
        <Image></Image>
        <Container style={{width: '73%', height: '80%'}}>
            <Form setResult={setResult}/>
            <Information result= {result} />
        </Container>
    </Component>
  )
}

export default Home;