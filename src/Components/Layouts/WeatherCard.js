import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core/';

import styles from '../../Styles/'

export default ({ weather }) =>
    <Paper style={styles.card}>
        {(weather && weather.temperature)
            ?
            <Fragment>
                <Typography id='fullAdress' variant="subtitle1" style={styles.fullAddressText}> 
                    {weather.formatted_address} 
                </Typography>
                <Typography id='temperature' variant="h4" style={styles.temperatureText}> 
                    {weather.temperature + ' ºC'} 
                </Typography>
            </Fragment>
            :
            <Fragment>
                <Typography id='welcomeTitle' variant="h4" style={styles.title}>
                    Welcome!
                </Typography>
                <Typography id='welcomeSubtitle' variant="h6" style={styles.subtitle}>
                    Check here how cold it is (or not)
                </Typography>
            </Fragment>
        }
    </Paper>