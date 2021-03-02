import React from 'react'
import { Box, Button, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },

    userCard: {
        background: '#fff',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        width: 460,
        maxWidth: '98%',
        // textAlign: 
        borderRadius: 20,
        boxShadow: '0px 1px 4px #00000012',
        '&:focus': {
            border: 'none',
            outline: "none"
        },
        position: 'relative',

        '@media only screen and (max-width: 370px)': {
            paddingTop: '3rem',
            paddingRight: '1.4rem',
            paddingLeft: '1.4rem',
            paddingBottom: '1rem'
        }
    },
    cardUserName: {
        fontSize: 18,
        fontWeight: 800,
        color: '#4E4E4E'
    },
    cardUserAd: {
        fontSize: 18,
        color: '#4E4E4E'
    },
    userProfile: {
        marginBottom: '6px',
        textAlign: 'center',
        '& img': {
            borderRadius: '50%',
            border: '8px solid #70707026'
        }
    },
    ul: {
        marginTop: '.4rem',
        justifyContent: 'center',
        '& li:not(:last-child)': {
            marginRight: '1.7rem'
        },
        display: 'flex',
        listStyle: 'none',
        '& span': {
            color: '#2a2c3499',
            fontSize: 13,
            display: 'block',
            '&:first-child': {
                color: '#2A2C34',
                fontWeight: 'bold',
                fontSize: 15
            }
        }
    },
    userDetails: {
        textAlign: "center"
    },
    userDetailsList: {
        listStyle: "none",
        margin: '1rem auto',
        '& li': {
            display: 'flex',
            maxWidth: 315,
            justifyContent: 'space-between',
            margin: '0 auto',
            '& span': {
                fontSize: 18,
                lineHeight: 1.6,
                color: '#4E4E4E',
                '&:last-child': {
                    fontWeight: 'bold'
                }
            }
        },

    },
    btnF: {
        background: '#1DBF73!important',
        width: 315,
        maxWidth: '100%',
        color: '#fff',
    },
    closeBtn: {
        position: 'absolute',
        right: 10,
        top: 10
    }
}))
const UserCard = () => {

    const [open, setOpen] = React.useState(true)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const classes = useStyles()
    const rootRef = React.useRef(null)
    return (

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"

            handleOpen={handleOpen}
            handleClose={handleClose}

            className={classes.modal}
            container={() => rootRef.current}
        >
            <div className={classes.userCard}>
                <div className={classes.userProfile}>
                    <img src="https://i.pravatar.cc/120" alt="" />
                </div>
                <div className={classes.userDetails} >
                    <Typography className={classes.cardUserName}>
                        Brandon McCoy
                    </Typography>
                    <Typography className={classes.cardUserAd}>
                        @sk878
                    </Typography>

                    <ul className={classes.ul}>
                        <li>
                            <span>
                                125
                            </span>
                            <span>
                                Apps
                            </span>
                        </li>
                        <li>
                            <span>
                                5.6k
                            </span>
                            <span>
                                Followers
                            </span>
                        </li>
                        <li>
                            <span>
                                4
                            </span>
                            <span>
                                Following
                            </span>
                        </li>
                    </ul>
                </div>

                <ul className={classes.userDetailsList}>
                    <li>
                        <span>
                            Skapp ID
                        </span>
                        <span>
                            SK878
                        </span>
                    </li>
                    <li>
                        <span>
                            Location
                        </span>
                        <span>
                            Bahamas
                        </span>
                    </li>
                    <li>
                        <span>
                            GitID
                        </span>
                        <span>
                            @ualss
                        </span>
                    </li>
                    <li>
                        <span>No of apps</span>
                        <span>
                            125
                        </span>
                    </li>
                </ul>

                <Box textAlign="center">
                    <Button className={classes.btnF}>
                        Follow
                </Button>
                </Box>

                <IconButton className={classes.closeBtn} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </div>
        </Modal>

    )
}

export default UserCard
