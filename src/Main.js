import React from "react";
import {Box, Heading, RoutedAnchor, Stack,} from "grommet";

import img from "./assets/img/psychology-4440675.jpg";
import styled from "styled-components";
import Start from "./Start"

const StyledImage = styled.img`
    object-fit: fill;
    height: 100vh;
    width: 100%;
  
  `;


const Main = () => (


    <Box background={{"color": "#120050"}}>

        <Stack anchor={"bottom-left"}>
            <StyledImage src={img}/>
            <Box height={"small"} margin={"medium"} align={"center"}>
                <Heading margin={"none"} size={"large"}>SIN IDENTIDAD</Heading>
            </Box>
        </Stack>

        <Start/>

    </Box>


);
export default Main;
