import React, { Fragment } from 'react'
import {
    Paper,
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core/';

import History from  './History.js'

import styles from '../../Styles'

export default ({ formAddress, onSubmit, handleChange, showHistory, handleHistory, searchHistory }) =>

    <Paper style={styles.card}>

        <form onSubmit={onSubmit}>
            <Grid container style={styles.formContainer}>
                <Grid item>
                    <TextField
                        required
                        id="formInput"
                        label="Type address here"
                        style={styles.addressInput}
                        value={formAddress}
                        onChange={handleChange}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter' && formAddress) {
                                ev.preventDefault();
                                onSubmit(ev);
                            }
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button
                        id="formButton"
                        variant="contained"
                        onClick={onSubmit}
                        style={styles.submitButton}
                        disabled={!formAddress} >
                        <Typography
                            id="formButtonText"
                            variant="button"
                            style={styles.submitButtonText}>
                             Check weather
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </form>

        {
            showHistory   
            ?
                <Fragment >
                    <Button 
                        id="hideHistoryButton" 
                        onClick={handleHistory} 
                        style={styles.historyButtom}
                        display="flex"
                        width="100%">
                        <Typography variant="caption" style={styles.historyButtonText}>
                            Hide
                        </Typography>
                    </Button>
                    <History searchHistory={searchHistory}/>
                </Fragment>
            :
            <Button 
                id="showHistoryButton" 
                onClick={handleHistory} 
                style={styles.historyButtom}>
                <Typography  variant="caption" style={styles.historyButtonText}>
                    Click here to see what places people are also searching!
                </Typography>
            </Button>

        }

    </Paper>