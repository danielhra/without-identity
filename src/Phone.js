import React, { useState } from "react";
import {
  Main,
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

const Phone = function () {
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

  return <p>hola illop</p>;
};

export default Phone;
