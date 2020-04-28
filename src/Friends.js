import React, {useState} from 'react';
import {
    Box, Button, Carousel, Form, FormField, Image, TextInput, Header, Heading, RoutedAnchor
} from 'grommet';

import atenas from "./assets/img/Atenas-Sebastián.png";
import casablanca from "./assets/img/Casablanca-Amal.png";
import moscu from "./assets/img/Moscu-Uxue.png";
import roma from "./assets/img/Roma-Guiseppe.png";

const Friends = function ({initialChild, ...props}) {

    const [failed, setFailed] = useState(false);
    const [success, setSuccess] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        if (value.toLowerCase() !== 'marc')
            setFailed(true);
        else {
            setSuccess(true);
            setFailed(false);
        }

    };
    return (
        <React.Fragment>
            <Box margin={"medium"} align={"center"}>


                <Header>que tienen que ver estas cuatro personas y estos lugares conmigo</Header>
                <Box align="center" pad="large">
                    <Carousel initialChild={initialChild} {...props}>
                        <Image src={moscu}/>
                        <Image src={atenas}/>
                        <Image src={roma}/>
                        <Image src={casablanca}/>
                    </Carousel>
                </Box>

                {!success && (<Form onSubmit={handleSubmit}>
                    <FormField
                        label={"resultado:"}
                        error={failed ? 'ha fallado' : ''}
                    >

                        <TextInput value={value} onChange={handleChange}/>
                    </FormField>
                    <Button primary type="submit" label={"submit"}/>
                </Form>)}

                {success &&
                (<Box>
                    <Heading>Muy bien chiaval avanzamos</Heading>
                    <RoutedAnchor path={"/map"}>Pulse aqui para continuar</RoutedAnchor>
                </Box>)}
            </Box>
        </React.Fragment>

    );
};
export default Friends;

