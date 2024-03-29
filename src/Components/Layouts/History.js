import React, { Fragment } from 'react';
import {
    Typography,
    Box,
    List,
    ListItem,
    Paper,
    Button
} from '@material-ui/core/';

import styles from '../../Styles'

export default ({ searchHistory, handleHistory, onWeatherClick }) =>
    <Box style={styles.historyBox}>
        <Typography id='historyTitle' variant="h5" style={styles.historyTitle}>
            What people search
        </Typography>
        {
            searchHistory && searchHistory.length > 0
                ?

                <Fragment>
                    <Typography id='historyCaption' variant="caption" style={styles.historyCaption}>
                        {"Showing the last " + searchHistory.length + " records"}
                    </Typography>

                    <List component="nav" aria-label="Secondary mailbox folders">
                        {
                            searchHistory.map((w, i) =>
                                <ListItem button key={i} id="historyItem" onClick={(e) => {onWeatherClick(e, w)}}>
                                    <Paper style={styles.historyItemPaper} >
                                        <Box display="flex" flexDirection="column">
                                            <Typography id='historyAddress' variant="caption" style={{ color: styles.colors.darkGrey }}>
                                                {w.formatted_address}
                                            </Typography>
                                            <Typography id='searchedAtText' variant="caption" style={{ color: styles.colors.lightGrey }}>
                                                {"Searched at: " + w.saved_at}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </ListItem>
                            )
                        }
                    </List>
                </Fragment>

                :

                <Typography id='noHistoryText' variant="caption" style={styles.historyCaption}>
                    Be the first one to search a place!
                </Typography>
        }
        <Fragment >
            <Button 
                id="hideHistoryButton" 
                onClick={handleHistory} 
                style={styles.historyButtom}>
                <Typography variant="caption" style={styles.historyButtonText}>
                    Hide
                </Typography>
            </Button>
        </Fragment>
    </Box>


