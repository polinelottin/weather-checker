import React from 'react'
import {Container} from '@material-ui/core'
import styles from './styles.js'

class WeatherForm extends React.Component {

    render(){
        return (
            <Container style={styles.container} >
                <p style={{padding: 8, color:'#EFE6DD'}}>yes it is</p>
            </Container>
        );
    }
}

export default WeatherForm;