import React, { Fragment } from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'
import styles from '../../assets/jss/no-apps/NoAppsStyle'
import { ReactComponent as RoundedBoxs } from '../../assets/img/icons/roundedBoxs.svg'
const useStyles = makeStyles(styles)
const NoApps = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <h1 className={classes.h1}>My Apps</h1>
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="calc(100vh - 200px)" flexDirection="column" paddingTop="1rem" paddingBottom="1rem">
                <div className={classes.boxIcon}>
                    <RoundedBoxs />
                </div>
                <h2 className={classes.h2}>No apps installed</h2>
                <p className={classes.p}>Go to app store, Explore apps and install</p>
                <Button className={classes.button}>
                    Discover Apps
            </Button>
            </Box>
        </Fragment>
    )
}
export default NoApps
