import React from "react";
import {Box, Heading, RoutedAnchor, Stack,} from "grommet";

import img from "./assets/img/psychology-4440675.jpg";
import styled from "styled-components";
import Start from "./Start"
import { Down } from 'grommet-icons';


const StyledImage = styled.img`
    object-fit: fill;
    height: 100vh;
    width: 100%;
  
  `;


const Main = () => (


    <Box background={{"color": "#120050"}}>

        <Stack anchor={"bottom-left"}>
            <StyledImage src={img}/>
            <Box  margin={"large"}>
                <Heading margin={"none"} size={"large"}>SIN IDENTIDAD</Heading>
            </Box>
            <Box  width={"100vw"} pad={"medium"} align={"center"}>
                <Down size={"large"}/>
            </Box>

        </Stack>

        <Start/>

    </Box>


);
export default Main;
