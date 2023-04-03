import React from 'react'
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';
import styled from '@emotion/styled';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const Row = styled(Typography)({
    padding: '10px 0',
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
})
const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20,
})
const Information = ({result}) => {
  return (
    result && Object.keys(result).length >0 ?
    <Box style={{margin: '30px 60px', textAlign: 'left'}}>
        <Row><LocationOnIcon/>{result.name}</Row>
        <Row><BrightnessMediumIcon/>Temperature: {result.main.temp}</Row>
        <Row><OpacityIcon/>Humidity : {result.main.humidity}</Row>
        <Row><Brightness5Icon/>Sun Rise : {new Date(result.sys.sunrise* 1000).toLocaleTimeString()}</Row>
        <Row><Brightness6Icon/>Sun set : {new Date(result.sys.sunset* 1000).toLocaleTimeString()}</Row>
        <Row><DehazeIcon/>Weather : {result.weather[0].main}</Row>
        <Row><CloudIcon/>Clouds : {result.clouds.all}%</Row>
    </Box>
    : <Error>
        Please Enter the value to check weather  <ThunderstormIcon/>
    </Error>
  )
}

export default Information;