import React, { useState, Fragment } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
// import MailIcon from '@material-ui/icons/Mail'
// import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
// logo
import { ReactComponent as Logo } from '../../assets/img/icons/logo.svg'

// icons custom
import { ReactComponent as QuestionIcon } from '../../assets/img/icons/question.svg'
import { ReactComponent as SettingIcon } from '../../assets/img/icons/setting.svg'
import { ReactComponent as EditProfileIcon } from '../../assets/img/icons/edit-profile.svg'
import { ReactComponent as LogoutIcon } from '../../assets/img/icons/exit-log-out.2.svg'
import { ReactComponent as NotificationIcon } from '../../assets/img/icons/notification.svg'
import { ReactComponent as CustomMenuIcon } from '../../assets/img/icons/Icon ionic-ios-menu.svg'
import { Box, Button } from '@material-ui/core'
import Sidebar from '../Sidebar/Sidebar'
// import { Translate } from '@material-ui/icons'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        background: "#ffff 0 % 0 % no-repeat padding-box",
        boxShadow: '0px 1px 4px #15223214',

    },
    toolBarRoot: {
        justifyContent: 'space-between',
        '@media only screen and (max-width: 890px)': {
            justifyContent: 'space-between'
        }
    },
    // grow: {
    //     flexGrow: 1,
    //     // background: 'red'
    //     '@media only screen and (max-width: 890px)': {
    //         flexGrow: 0,
    //     }
    // },
    menuButton: {
        display: 'none',
        marginRight: theme.spacing(2),
        '@media only screen and (max-width: 890px)': {
            display: 'block'
        }
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#F0F5F7', 1),
        '&:hover': {
            backgroundColor: fade("#F0F5F7", 0.7),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        color: '#8B9DA5',
        '@media only screen and (max-width: 890px)': {
            display: 'none'
        }
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
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50ch',
        },

    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    usrIcon: {
        width: '28px',
        height: '28px',
        minWidth: 'auto',
        backgroundColor: '#7e84a31c',
        borderRadius: "50%"
    },
    userName: {
        paddingLeft: "10px",
        paddingRight: "1rem"
    },
    helpText: {
        paddingLeft: '.5rem'
    },
    pr_4: {
        paddingRight: '2rem'
    },
    AngleDown: {
        color: '#B4C6CC'
    },
    QuestionIcon: {
        marginRight: '7px'
    },
    avatarIcon: {
        color: '#7E84A3'
    },
    MenuRoot: {
        marginTop: '40px',

    },
    MenuItem: {
        borderBottom: ".3px solid #70707045",
        '@media(max-width: 991px)': {
            fontSize: '12px'
        }
    },
    menuIcon: {
        marginRight: ".90rem",
        '@media(max-width: 1440px)': {
            marginRight: ".70rem",
        }
    },
    logoutText: {
        color: '#FF6060'
    },
    notifiText: {
        paddingLeft: '10px'
    },
    mobileHelpItem: {
        paddingLeft: ".5rem"
    }
}))

export default function Navbar() {
    const { width } = useWindowDimensions()
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            className="profile-dropdown"

        >
            <MenuItem onClick={handleMenuClose} className={classes.MenuItem}>
                <SettingIcon className={classes.menuIcon} />
                <span>Settings</span>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className={classes.MenuItem}>
                <EditProfileIcon className={classes.menuIcon} />
                <span>Edit Profile</span>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className={classes.MenuItem}>
                <LogoutIcon className={classes.menuIcon} />
                <span className={classes.logoutText}>Logout</span>
            </MenuItem>
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Box display='flex' alignItems="center" className={classes.mobileHelpItem} >
                    <QuestionIcon />
                    <p className={classes.helpText}>Help</p>
                </Box>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 17 new notifications" color="inherit" style={{ width: '30px', height: "28px" }}>
                    <Badge color="secondary" variant="dot">
                        <NotificationIcon />
                    </Badge>
                </IconButton>
                <p className={classes.notifiText}>Notifications</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <Button className={classes.usrIcon}>
                    <PersonOutlineIcon className={classes.avatarIcon} />
                </Button>
                <p className={classes.userName}>Fernando Cabral</p>
                <KeyboardArrowDownIcon className={classes.AngleDown} />
            </MenuItem>
        </Menu>
    )
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const menuButtonHandler = () => {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }
    return (
        <Fragment>
            {width <= 890 &&
                <Sidebar style={{
                    display: width <= 890 ? 'block' : undefined,
                    zIndex: 99,
                    height: '100vh',
                    transition: '.5s ease',
                    transform: menuIsOpen ? 'translateX(0)' : 'translateX(-100%)'
                }} />}
            {(menuIsOpen && width <= 890) && <div onClick={menuButtonHandler}
                style={{
                    idth: '100%',
                    position: 'fixed',
                    zIndex: '98',
                    background: '#ebebeba6',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: width > 890 ? 'none' : undefined,
                }}></div>}
            <AppBar position="static" className={classes.root} color='default'>
                <Toolbar className={classes.toolBarRoot} >
                    <IconButton edge="start" onClick={menuButtonHandler} className={classes.menuButton} color="inherit" aria-label="menu">
                        <CustomMenuIcon />
                    </IconButton>
                    <div className="logo-top" >
                        <Logo />
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={classes.sectionDesktop}>
                        <Box display='flex' alignItems="center" className={classes.pr_4}>
                            <QuestionIcon className={classes.QuestionIcon} />
                            <p className={classes.helpText}>Help</p>
                        </Box>
                        <Box display="flex" alignItems="center" className={classes.pr_4}>

                            <IconButton aria-label="show 17 new notifications" color="inherit" style={{ width: '30px', height: "28px" }}>
                                <Badge color="secondary" variant="dot">
                                    <NotificationIcon />
                                </Badge>
                            </IconButton>
                        </Box>

                        <Box display="flex" alignItems="center" onClick={handleProfileMenuOpen}>
                            <Button className={classes.usrIcon}>
                                <PersonOutlineIcon className={classes.avatarIcon} />
                            </Button>
                            <p className={classes.userName}>Fernando Cabral</p>
                            <KeyboardArrowDownIcon className={classes.AngleDown} />
                        </Box>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Fragment>
    )
}