import React, {useState} from 'react';
import {Anchor, Box, Button, Form, FormField, Paragraph} from 'grommet';

import {send} from 'grommet-icons';

const Validation = function (props) {

    const defaultValue = {
        answer: ''
    };

    const [success, setSuccess] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const handleSubmit = (event) => {
        if (event.value.answer === props.value) {
            setSuccess(true);
            props.onValid(true);
        }
    };

    return (

        <Box margin={{bottom: "large"}}>
            {(!success &&
                <Form onSubmit={handleSubmit} validate={"submit"} value={value} onChange={setValue}>
                    <Box direction={"row"}>

                        <FormField
                            name="answer"
                            validate={[
                                answer => {
                                    if (answer !== props.value)
                                        return {message: "Incorrecto", status: "error"};
                                    return undefined;
                                }
                            ]}
                        />

                        <Box margin={"medium"}>
                            <Button primary type="submit" label={"?"}/>
                        </Box>
                    </Box>
                </Form>)}
            {(success &&
                <Box direction={"column"}>
                    <Paragraph size={"large"}>{props.successMessage}</Paragraph>
                    <Anchor href={props.path}>{props.pathText}</Anchor>
                </Box>)
            }

        </Box>
    );

};


export default Validation;

