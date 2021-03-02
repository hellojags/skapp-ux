import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { ReactComponent as ErrorIcon } from '../../assets/img/icons/errorGrahpics.svg'
import styles from '../../assets/jss/error-page/ErrorPageStyle'
const useStyles = makeStyles(styles)
const Error = () => {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" minHeight="calc(100vh - 200px)" >
            <ErrorIcon className={classes.errorIcon} />
            <h1 className={classes.h1}>505</h1>
            <p className={classes.text}>Don't worry, we will fix it soon.</p>
            <small className={classes.small}>Go back to <a href="#home ">home </a>or contact us <a href="#about">about</a> a problem.</small>
        </Box >
    )
}

export default Error
