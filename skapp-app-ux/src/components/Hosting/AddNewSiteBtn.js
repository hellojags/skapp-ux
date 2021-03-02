import React from 'react'
import { makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/hosting/AddNewSiteBtnStyle'
const useStyles = makeStyles(styles)
const AddNewSite = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <span>+ Add New Site</span>
        </div>
    )
}

export default AddNewSite
