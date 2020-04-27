import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Box, Grommet} from "grommet";

import Main from "./Main";
import Start from "./Start";
import Friends from "./Friends";
import Map from "./Map";
import Phone from "./Phone";

const grommet = {
    global: {
        font: {
            family: "Lobster Two",
        },
    },
    heading: {
        font: {family: "Monoton"}
    }
};

const Content = () => (
    <Box>
        <Route exact path="/" component={Main}/>
        <Route exact path="/start" component={Start}/>
        <Route exact path="/friends" component={Friends}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/phone" component={Phone}/>
    </Box>
);

export default () => (
    <Router>
        <Grommet theme={grommet}>
            <Content/>
        </Grommet>
    </Router>
);
