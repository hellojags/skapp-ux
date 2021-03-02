import React, { Fragment } from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from '../../assets/jss/no-apps/NoAppsStyle'
import { ReactComponent as DomainIcon } from '../../assets/img/icons/domain.svg'
const useStyles = makeStyles(styles)
const NoDomain = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <h1 className={classes.h1}>Domain Manager</h1>
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="calc(100vh - 200px)" flexDirection="column" paddingTop="1rem" paddingBottom="1rem">
                <DomainIcon className={classes.domainIcon} />


                <h2 className={classes.h2}>No Custom Domains</h2>
                <p className={classes.p}>You don't have any custom domains. Click below button to add new domain</p>
                <Link to='domains'>
                    <Button className={classes.button}>
                        Add domain
                </Button>
                </Link>
            </Box>
        </Fragment>
    )
}
export default NoDomain
