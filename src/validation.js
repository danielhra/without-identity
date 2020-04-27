import React, {useState} from 'react';
import {Anchor, Box, Button, Form, FormField, Heading, TextInput} from 'grommet';

const Validation = function (props) {

    const [value, setValue] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        if (value === props.value) {
            setSuccess(true);
            props.onValid(true);
        }
    };

    return (

        <React.Fragment>
            {(!success &&
                <Form onSubmit={handleSubmit} validate={"submit"}>
                    <Box direction={"row"} gap={"medium"}>

                        <FormField
                            name="employeeId"
                            required
                            validate={[
                                answer => {
                                    if (answer && answer !== value)
                                        return { message: "Incorrecto", status: "error" };
                                    return undefined;
                                }
                            ]}
                            onChange={handleChange}
                        />

                        <Box alignSelf={"center"}>
                            <Button primary type="submit" label={"submit"}/>
                        </Box>
                    </Box>
                </Form>)}
            {(success &&
                <Box>
                    <Heading>{props.successMessage}</Heading>
                    <Anchor href={props.path}>{props.pathText}</Anchor>
                </Box>)
            }

        </React.Fragment>
    );

};


export default Validation;

