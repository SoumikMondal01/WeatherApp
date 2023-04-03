import React, { useState } from 'react'
import {Box, Button, InputBase} from '@mui/material'
import styled from '@emotion/styled'
import { getWeather } from '../services/api';


const Container = styled(Box)({
    background: '#344c63',
    padding: 10
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18,
    fontWeight: 10
});

const GetButton = styled(Button)({
    backgroundColor: '#e67e22'
})
const Form = ({setResult}) => {
    const [data, setData] = useState({
        city: "",
        country: ""
    });
    const handleChange = (event)=>{
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
        console.log(data);
    }
    const getWeatherInfo = async ()=>{
        let res= await getWeather(data.city, data.country);
        setResult(res);
    }
  return (
    <Container>
        <Input placeholder='City'
        onChange={(event)=>handleChange(event)}
        name='city'
        />
        <Input placeholder='Country'
        onChange={(event)=>handleChange(event)}
        name='country'
        />
        <GetButton
            variant='contained'
            onClick={()=>getWeatherInfo()}
        >Get Weather</GetButton>
    </Container>
  )
}

export default Form