import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {
    Grid,
    Typography,
    Button,
    TextField,
    FormControl,
    Paper,
} from '@material-ui/core';

import Divider from '../Divider'
import sendEmail from '../../utils/sendEmail';

const useStyles = makeStyles(theme => ({
    formPaper: {
        padding: '1rem',
        [theme.breakpoints.up('md')]: {
            padding: '3rem'
        },
        width: '100%',
        '& .MuiFormControl-root': {
            marginBottom: '10px'
        },
        '& button': {
            margin: '2rem'
        }
    },
    leftSection: {
        padding: '1rem',
        [theme.breakpoints.up('md')]: {
            padding: '1rem 10rem 1rem 1rem'
        },
        '& h2': {
            textShadow: theme.palette.shadows.large
        },
        '& p': {
            textShadow: theme.palette.shadows.small
        }
    }
}));

const ContactForm = props => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    })
    const classes = useStyles()

    const handleButtonClick = () => {
        const { name, email, message } = state
        setState(state => ({
            ...state,
            message: '',
            name: '',
            email: ''
        }))
        const data = {
            'name': name,
            'email': email,
            'message': message
        }
        console.log(data)
        sendEmail(data)
    }

    const handleInputChange = (event, field) => {
        const value = event.target.value
        setState(state => ({
            ...state,
            [field]: value
        }))
    }

    return (
        <Paper className={classes.formPaper}>
            <Grid>
                <Typography component='h2' gutterBottom align='center' variant='h4'>
                    Enter your details
                            </Typography>
                <Divider center color='secondary' space={2} width={70} />
            </Grid>
            <Grid container item direction='column'>
                <FormControl >
                    <TextField
                        id="name-input"
                        label="Full Name"
                        onChange={(event) => { handleInputChange(event, 'name') }}
                        value={state.name}
                        color='secondary' />
                </FormControl>
                <FormControl >
                    <TextField
                        id="email-input"
                        label="Email"
                        onChange={(event) => { handleInputChange(event, 'email') }}
                        value={state.email}
                        color='secondary' />
                </FormControl>
                <FormControl >
                    <TextField
                        id="email-input"
                        label="Enter a message"
                        onChange={(event) => { handleInputChange(event, 'message') }}
                        value={state.message}
                        multiline
                        variant='outlined'
                        rows={10}
                        color='secondary' />
                </FormControl>
            </Grid>
            <Grid container item justify='center'>
                <Button
                    disableFocusRipple
                    variant='contained'
                    color='secondary'
                    onClick={handleButtonClick}>Submit</Button>
            </Grid>
        </Paper>
    )
}

export default ContactForm;
