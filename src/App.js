import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {
    Grommet, Box,
} from 'grommet';

import Main from './Main';
import Start from './Start';
import Friends from './Friends';
import Map from './Map';


const grommet = {
    global: {
        font: {
            family: 'Roboto',
        },
    },
};

const Content = () => (
    <Box>

        <Route exact path="/" component={Main}/>
        <Route exact path="/start" component={Start}/>
        <Route exact path="/friends" component={Friends}/>
        <Route exact path="/map" component={Map}/>

    </Box>

);

export default () => (
    <Router>
        <Grommet theme={grommet}>
            <Content/>
        </Grommet>
    </Router>
);
