import React, {useState} from 'react';
import {Box, Button, Form, FormField, Heading, Image, Paragraph, RoutedAnchor, TextInput} from 'grommet';
import closedSuitcase from "./assets/img/Maleta-Cerrada.jpg";
import openSuitcase from "./assets/img/Maleta-Abierta.png";

const Header = function () {

    const [value, setValue] = useState('');
    const [failed, setFailed] = useState(false);
    const [canOpen, setCanOpen] = useState(false);


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        if (value !== '1234')
            setFailed(true);
        else {
            setFailed(false);
            setCanOpen(true);
        }

    };

    return (
        <Box align={"center"} elevation={"medium"} gap={"medium"}>

            <Box>
                <Paragraph size={"large"}>Estimado jugador, le agradezco que haya decidido
                    formar parte de esta aventura.
                </Paragraph>

                <Paragraph size={"large"}>
                    Se le recomienda que haga uso de su agudo intelecto para encontrar las respuestas antes de que sea
                    demasiado tarde. Dispone de una hora para encontrarme… No sé qué hora es, ni que hago aquí.
                </Paragraph>

                <Paragraph size={"large"}>
                    Recuerdo estar en el aeropuerto de Orlando, cogí un vuelo a las 02:36 cuya duración estimé en 3 h y
                    35
                    min hacia México DF.
                </Paragraph>

                <Paragraph size={"large"}>
                    Debía llegar a tiempo a la cita, pero me encuentro en esta fría habitación
                    acompañado únicamente con mi viejo maletín. Quién soy y por qué estoy aquí, que es eso tan
                    importante que tengo que hacer. Preguntas que bombardean mi cabeza en estos momentos.
                </Paragraph>

                <Paragraph size={"large"}>¿Serás capaz de ayudarme a encontrar respuestas?</Paragraph>
            </Box>

            <Image src={!canOpen ? closedSuitcase : openSuitcase}/>

            {(!canOpen &&
                <Form onSubmit={handleSubmit}>
                    <Box direction={"row"} gap={"medium"}>

                        <FormField
                            error={failed ? 'Incorrecto' : ''}
                        >
                            <TextInput value={value} onChange={handleChange}/>
                        </FormField>
                        <Box alignSelf={"center"}>

                            <Button primary type="submit" label={"submit"}/>
                        </Box>
                    </Box>
                </Form>)}
            {(canOpen &&
                <Box>
                    <Heading>Por fin he podido recordar la clave...</Heading>
                    <RoutedAnchor path={"/friends"}>Pulse aqui para continuar</RoutedAnchor>
                </Box>)
            }

        </Box>

    );

};


export default Header;

