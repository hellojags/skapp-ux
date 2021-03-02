import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import AppCard from '../AppsComp/AppCard'
const useStyles = makeStyles({
    listContain: {
        marginTop: '1rem',
        '@media only screen and (max-width: 575px)': {
            marginTop: 0
        },
    }
})
const SimilarApps = () => {
    const classes = useStyles()
    return (
        <div className={`${classes.listContain} list-grid-container`}>
            <Grid container spacing={1}>
                <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                    <AppCard selectable={true} />
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                    <AppCard selectable={true} />
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                    <AppCard />
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                    <AppCard />
                </Grid>

            </Grid>
        </div>
    )
}

export default SimilarApps
