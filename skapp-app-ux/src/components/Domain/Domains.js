import { Box, InputBase } from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import UtilitiesItem from '../AppsComp/UtilitiesItem'
import ListFilter from '../AppsComp/ListFilter'
import SubmitBtn from '../AppsComp/SubmitBtn'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import DomainTable from './DomainTable'
import AddNewDomain from './AddNewDomain'
import AddNewDomainTXT from './AddNewDomainTXT'
// import HostingItem from './HostingItem'
// import AddNewSite from './AddNewSiteBtn'
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
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            color: '#8B9DA5',
            boxShadow: '0px 1px 2px #15223214',
            border: '1px solid #7070701A;',

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
                width: '50ch',
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
                    paddingRight: '1rem'

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
        }

    }
))
const Domains = () => {

    const { width } = useWindowDimensions()
    const classes = useStyles()
    const [addNew, setAddNew] = useState(true)
    const openModalHandler = () => {
        addNew ? setAddNew(false) : setAddNew(true)
    }
    return (

        <Fragment >
            {!addNew && <AddNewDomainTXT />}
            <AddNewDomain openModal={addNew} openModalHandler={openModalHandler} />
            <Box display="flex" className='second-nav' alignItems="center">
                <Box display="flex" alignItems="center" className={`${classes.margnBottomMediaQuery} ${classes.MobileFontStyle}`}>
                    <h1 className={classes.pageHeading}>Domain Manager</h1>
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
                    <Box>
                        <UtilitiesItem />
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

                    <Box >
                        <SubmitBtn addSite={true} styles={{ justifyContent: "space-around" }} onclick={openModalHandler}>
                            Add Domain
                    </SubmitBtn>
                    </Box>
                </Box>

            </Box>
            <DomainTable />
        </Fragment>
    )
}

export default Domains
