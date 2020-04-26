import React from 'react';
import {
    Avatar,
    Box,
    RoutedAnchor,
    Anchor,
    Header,
    Image,
    Stack,
    Paragraph,
    Heading
} from 'grommet';

import img from "./assets/img/cover.jpg"
import closedSuitcase from "./assets/img/maletaCerrada.jpg"


const Main = () => (

    <React.Fragment>
        <Stack anchor={"center"}>
            <Image src={img} fill={"horizontal"} opacity={"strong"}/>

            <Box align={"center"} gap={"medium"} >
                <Heading margin={"none"} size={"xlarge"} color={"light-2"}> SIN IDENTIDAD</Heading>
                <RoutedAnchor path={"/start"} size={"xlarge"} color={"light-1"}>INICIAR</RoutedAnchor>

            </Box>
        </Stack>

    </React.Fragment>


);
export default Main;

