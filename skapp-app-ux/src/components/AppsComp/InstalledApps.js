import { Box, Button, Grid, InputBase } from '@material-ui/core'
import React, { Fragment } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

import ListFilter from './ListFilter'
import SelectItem from './SelectItem'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import AppCard from './AppCard'
import styles from "../../assets/jss/apps/AppListStyle"

const useStyles = makeStyles(theme => (
    {
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade('#fff', 1),
            '&:hover': {
                backgroundColor: fade("#fff", 0.9),
            },
            marginRight: theme.spacing(2),
            // marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            color: '#8B9DA5',
            boxShadow: '0px 1px 2px #15223214',
            border: '1px solid #7070701A;',
            // hieght: '41px',
            marginLeft: '16px!important',
            '@media (max-width: 1650px)': {
                width: 'auto'
            },

        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#B4C6CC'
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {

            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '20ch',
            },
            paddingTop: '10px',
            paddingBottom: '10px',
            '@media (max-width: 1660px)': {
                width: '34ch'
            },
            '@media (max-width: 1460px)': {
                width: '100%'
            }

        },

        pageHeading: {
            color: '#131523',
            fontSize: '28px',
        },
        smallText: {
            alignSelf: "flex-end",
            color: '#5A607F',
            paddingLeft: '1rem',
            fontWeight: '400'
        },
        Media1249: {
            width: 'calc(100% - 230px)',
            marginLeft: 'auto!important',
            marginRight: 0,
            '@media only screen and (max-width: 890px)': {
                width: '100%',
            },

        },
        margnBottomMediaQuery: {
            '@media only screen and (max-width: 1249px)': {
                marginBottom: '.75rem'
            },


        },

        secondNavRow2: {
            '@media only screen and (max-width: 890px)': {
                justifyContent: 'space-between'
            },
            '@media only screen and (max-width: 575px) and (min-width: 509px)': {
                marginBottom: '.6rem'
            }
            , '@media only screen and (max-width: 510px)': {
                flexWrap: 'wrap',
                "& > div": {
                    width: '50%',
                    minWidth: '50%',
                    maxWidth: '50%',
                    marginBottom: '.75rem'
                },
                "& > div:nth-child(odd)": {
                    paddingLeft: '1rem'

                }
            },
        },
        MobileFontStyle: {
            '@media only screen and (max-width: 575px) ': {
                marginBottom: '.7rem',
                marginTop: '.4rem',
                '& h1': {
                    fontSize: '18px'
                }
            }
        },
        ...styles,
        btnSecondNav: {
            color: '#7E84A3',
            backgroundColor: '#fff!important',
            boxShadow: '0px 1px 2px #15223214',
            border: '1px solid #7070701A',
            borderRadius: 4
        },
        btnSecondNavContainer: {
            marginLeft: '1rem',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        }
    }
))
function InstalledApps() {
    // temp var for selected page
    // const selectedPage = true

    const { width } = useWindowDimensions()
    const classes = useStyles()


    return (
        <Fragment >
            <Box display="flex" className='second-nav' alignItems="center">
                <Box display="flex" alignItems="center" className={`${classes.margnBottomMediaQuery} ${classes.MobileFontStyle}`}>
                    <h1 className={classes.pageHeading}>Apps</h1>
                    <small className={classes.smallText}>120 Results</small>
                </Box>
                {width < 1250 && <div className={`${classes.search} ${classes.Media1249} ${classes.margnBottomMediaQuery}`}>
                    <Box>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                    </Box>
                    <InputBase
                        placeholder="Search Apps"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>}
                <Box className={classes.secondNavRow2} display="flex" alignItems="center" flex={1} justifyContent='flex-end'>

                    <Box className={classes.btnSecondNavContainer}>
                        <Button className={classes.btnSecondNav} style={{ color: '#000' }}> All (50)</Button>
                    </Box>
                    <Box className={classes.btnSecondNavContainer}>
                        <Button className={classes.btnSecondNav} > Programms (12)</Button>
                    </Box>
                    <Box className={classes.btnSecondNavContainer}>
                        <Button className={classes.btnSecondNav}>Utilities (25)</Button>
                    </Box>
                    {width > 1249 && <div className={classes.search}>
                        <Box>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                        </Box>
                        <InputBase
                            placeholder="Search Apps"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>}
                    <Box>
                        <ListFilter />
                    </Box>
                    <Box>
                        <SelectItem />
                    </Box>

                </Box>
            </Box>
            {/* When items are selectable */}
            {/* {selectedPage && <SelectedAppsHeader />} */}

            <div className={`${classes.listContain} list-grid-container`}>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                        <AppCard selectable={true} updated={true} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                        <AppCard selectable={true} updated={false} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                        <AppCard updated={true} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                        <AppCard updated={true} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
                        <AppCard selectable={true} updated={false} />
                    </Grid>

                </Grid>
            </div>

        </Fragment>
    )
}

export default InstalledApps
