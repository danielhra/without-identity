import React, {useState} from 'react';
import {
    Main, Button, Heading, Paragraph, TextInput, Box, Image, FormField, Form, RoutedAnchor
} from 'grommet';
import closedSuitcase from "./assets/img/Maleta-Cerrada.jpg";
import openSuitcase from "./assets/img/Maleta-Abierta.png";

import logo from "./assets/img/logo.png";

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

    return (<React.Fragment>

            <Box align={"center"} fill>

                <Box margin={"medium"} align={"center"}>
                    <Heading>Sinopsis</Heading>
                    <Paragraph size={"xlarge"} fill>Estimado jugador, le agradezco que haya decidido
                        formar parte de esta aventura. Se le
                        recomienda que haga uso de su agudo intelecto para encontrar las respuestas antes de que sea
                        demasiado tarde. Dispone de una hora para encontrarme… No sé qué hora es, ni que hago aquí.
                        Recuerdo
                        estar en el aeropuerto de Orlando, cogí un vuelo a las 02:36 cuya duración estimé en 3 h y 35
                        min
                        hacia México DF. Debía llegar a tiempo a la cita, pero me encuentro en esta fría habitación
                        acompañado únicamente con mi viejo maletín. Quién soy y por qué estoy aquí, que es eso tan
                        importante que tengo que hacer. Preguntas que bombardean mi cabeza en estos momentos. ¿Serás
                        capaz
                        de ayudarme a encontrar respuestas?</Paragraph>

                    <Image src={!canOpen ? closedSuitcase : openSuitcase}/>

                    {(!canOpen && <Form onSubmit={handleSubmit}>
                        <FormField
                            label={"resultado:"}
                            error={failed ? 'ha fallado' : ''}
                        >

                            <TextInput value={value} onChange={handleChange}/>
                        </FormField>
                        <Button primary type="submit" label={"submit"}/>
                    </Form>)}
                    {(canOpen &&
                        <Box>
                            <Heading>Por fin he podido recordar la clave...</Heading>
                            <RoutedAnchor path={"/friends"}>Pulse aqui para continuar</RoutedAnchor>
                        </Box>)
                    }


                </Box>

            </Box>
        </React.Fragment>

    );

};


export default Header;

