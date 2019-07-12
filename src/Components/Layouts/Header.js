import React  from 'react'
import {
    AppBar, 
    Toolbar, 
    Typography
} from '@material-ui/core/';

import styles from '../../Styles/'

export default props => 
    <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolBar}>
            <Typography id='title' variant="h4" style={styles.barTitle}>
                HOW COLD IS IT THERE?
            </Typography>
        </Toolbar>
    </AppBar>
    
    