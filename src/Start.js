import React, {useState} from 'react';
import {Box, Image, Paragraph} from 'grommet';
import closedSuitcase from "./assets/img/Maleta-Cerrada.jpg";
import openSuitcase from "./assets/img/Maleta-Abierta.png";
import Validation from "./validation";

const Header = function () {

    const [canOpen, setCanOpen] = useState(false);

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

            {!canOpen && <Box height={{min: "medium", max: "medium"}} width={{min: "medium", max: "medium"}}>
                <Image fit={"contain"} src={closedSuitcase}/>
            </Box>}

            {canOpen &&
            <Box height={{min: "medium", max: "medium"}} width={{min: "medium", max: "medium"}} animation={"pulse"}>

                <Image fit={"contain"} src={openSuitcase}/>
            </Box>}


            <Validation
                value={"1234"}
                onValid={setCanOpen}
                path={"/friends"}
                successMessage={"Por fin he podido recordar la clave..."}
                pathText={"continue con su aventura"}
            />

        </Box>

    );

};


export default Header;

