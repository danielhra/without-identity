import React, { useState } from "react";
import {
  Button,
  Heading,
  Paragraph,
  TextInput,
  Box,
  Image,
  FormField,
  Form,
  RoutedAnchor,
} from "grommet";

import cesar from "./assets/img/Frases Cesár.png";

const Map = function () {
  const [value, setValue] = useState("");
  const [failed, setFailed] = useState(false);
  const [canOpen, setCanOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value.toUpperCase() !== "DIBUJA LA RUTA") setFailed(true);
    else {
      setFailed(false);
      setCanOpen(true);
    }
  };

  return (
    <React.Fragment>
      <Box align={"center"} fill>
        <Image src={cesar} />

        <Box margin={"medium"} align={"center"}>
          <Heading></Heading>
          <Paragraph size={"xlarge"} fill>
            IWXeW HIWGMJVEQHS IO PIQWENI, OE GSQXVEWIRE IW: HMFYNE OE VYXE
          </Paragraph>

          {!canOpen && (
            <Form onSubmit={handleSubmit}>
              <FormField
                label={"resultado:"}
                error={failed ? "ha fallado" : ""}
              >
                <TextInput value={value} onChange={handleChange} />
              </FormField>
              <Button primary type="submit" label={"submit"} />
            </Form>
          )}
          {canOpen && (
            <Box>
              <Heading>
                Este camino me resulta muy peculiar, tendrá algo que ver en como
                llegué hasta aquí…
              </Heading>
              <RoutedAnchor path={"/phone"}>
                Pulse aqui para continuar
              </RoutedAnchor>
            </Box>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Map;
