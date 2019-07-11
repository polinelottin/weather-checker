import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core/';

import styles from '../../Styles/'

export default ({ weather }) =>
    <Paper style={styles.weatherCardPaper}>
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
                <Typography id='welcomeTitle' variant="h6" style={styles.welcomeTitle}>
                    Bem-vindo!
                </Typography>
                <Typography id='welcomeSubtitle' variant="caption" style={styles.welcomeSubtitle}>
                    Aqui você descubre a temperatura atual de qualquer lugar
                </Typography>
            </Fragment>
        }
    </Paper>