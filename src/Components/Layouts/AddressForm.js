import React from 'react'
import {
    Paper,
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core/';

import styles from '../../Styles'

export default ({ formAddress, onSubmit, handleChange }) =>
    <Paper style={styles.card}>

        <form onSubmit={onSubmit}>
            <Grid container style={styles.formContainer}>
                <Grid item>
                    <TextField
                        required
                        id="formInput"
                        label="Informe um endereço aqui"
                        style={styles.addressInput}
                        value={formAddress}
                        onChange={handleChange}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter' && formAddress) {
                                ev.preventDefault();
                                onSubmit();
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
                            Buscar temperatura
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Paper>

