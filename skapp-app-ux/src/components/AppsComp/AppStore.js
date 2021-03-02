import { Box, Button, InputBase } from '@material-ui/core'
import React, { Fragment } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
// import UtilitiesItem from './UtilitiesItem'
import ListFilter from './ListFilter'
import SelectItem from './SelectItem'
import SubmitBtn from './SubmitBtn'
import AppsList from './AppsList'
import useWindowDimensions from '../../hooks/useWindowDimensions'
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import CustomPagination from './CustomPagination'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
// import SelectedAppsHeader from './SelectedAppsHeader'
import Slider from "react-slick"
// slick slider css
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SlickNextArrow from '../slickarrows/SlickNextArrow'
import SlickPrevArrow from '../slickarrows/SlickPrevArrow'
import Footer from '../Footer/Footer'
// import classes from '*.module.css'
// import InfiniteScroll from 'react-infinite-scroll-component'
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
            // padding: theme.spacing(1, 1, 1, 0),
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
            width: '50%',
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
        // PerfectScrollbarContainer: {
        //     padding: '1rem 1.4rem',
        //     paddingBottom: '0',
        //     height: 'calc(100vh - 64px)',
        //     '@media only screen and (max-width: 575px)': {
        //         padding: '.5rem',
        //     },
        // },
        // mobileSave: {
        //     padding: '1rem 1.4rem',
        //     paddingBottom: '0',
        //     height: 'calc(100vh - 64px)',
        //     overflow: "auto",
        //     '@media only screen and (max-width: 575px)': {
        //         padding: '.5rem',
        //     },
        // },
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

// get div with
function AppStore() {
    // temp var for selected page
    // const selectedPage = true
    // This page code
    const { width } = useWindowDimensions()

    let showSlides = width > 1600 ? 1600 / 140 : width / 140
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: Math.floor(width / 140),
        // slidesToShow: Math.floor(width / 140),
        slidesToShow: showSlides,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />
    }
    // console.log(width)
    const classes = useStyles()
    const AppsComp = (<Fragment >
        <Box display="flex" className='second-nav' alignItems="center">
            <Box display="flex" alignItems="center" className={`${classes.margnBottomMediaQuery} ${classes.MobileFontStyle}`}>
                <h1 className={classes.pageHeading}>Skapp App Store</h1>

            </Box>
            {width < 1050 && <div className={`${classes.search} ${classes.Media1249} ${classes.margnBottomMediaQuery}`}>
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


                {width > 1049 && <div className={classes.search}>
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
                <Box>
                    <SubmitBtn >
                        Add App
                    </SubmitBtn>
                </Box>
            </Box>
        </Box>

        {/* <div >
            <Button className="tagButton">
                Art & Design (5)
            </Button>
        </div> */}
        <Slider {...settings} className="appTagsButtons">
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
            <div>
                <Button className="tagButton">
                    Art & Design (5)
            </Button>
            </div>
        </Slider>
        <div>
            <AppsList />
            <Footer />
        </div>
    </Fragment>)

    return (
        // (width < 575)
        //     ? <div className={classes.mobileSave}>{AppsComp}</div>
        //     : < PerfectScrollbar className={classes.PerfectScrollbarContainer} >{AppsComp}</PerfectScrollbar>

        <div>{AppsComp}</div>
    )
}

export default AppStore
