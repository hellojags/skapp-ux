import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Box, Button, Typography } from '@material-ui/core'
import { ReactComponent as CopyIcon } from '../../assets/img/icons/copy.svg'
import { ReactComponent as FBIcon } from '../../assets/img/icons/Facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/Twitter.svg'
import { ReactComponent as EmailIcon } from '../../assets/img/icons/E-mail.svg'



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    shareCardContainer: {
        background: '#fff',
        boxShadow: '0px 2px 5px #15223221',
        borderRadius: 15,
        padding: '48px 60px',
        '@media only screen and (max-width: 575px)': {
            padding: '40px 20px',
            paddingTop: '50px'
        },
        '&:focus': {
            outline: 0,
            border: 0
        },
        width: '90%',
        maxWidth: 500,
        '& p': {
            color: '#5A607F',
            marginBottom: '5px'
        },
        '& .s-links-title': {
            marginTop: '.4rem'
        },
        '& a': {
            marginRight: '1rem',
            '&:focus': {
                textDecoration: 'none',
                opacity: .8,
                transition: '.25s ease'
            }
        }

    },
    modalTitle: {
        fontSize: 32,
        color: '#333333',
        fontWeight: 700,
        marginBottom: '1rem'
    },
    linkInput: {
        height: 48,
        padding: '10px 15px',
        paddingRight: 50,
        border: '2px solid #D9E1EC',
        borderRadius: 4,
        width: '100%',
        color: '#363947',
        fontSize: 16,
        '&:focus': {
            outlineColor: '#1DBF73'
        },
        '@media only screen and (max-width: 575px)': {
            fontSize: 13
        },
    },
    copyBtn: {
        position: 'absolute',
        right: 0,
        top: 0,
        minWidth: 50,
        height: '100%'
    },
    closeBtn: {
        border: '1px solid #1DBF73',
        minWidth: '100%',
        borderRadius: '5px',
        boxShadow: '0px 2px 5px #15223221',
        height: 48,
        marginTop: '2rem',
        textTransform: 'none'
    }

}))

export default function ShareApp({ shareModelOpen, shareModelFn }) {
    const classes = useStyles()
    const textAreaRef = useRef(null)
    const copyToClipboard = (e) => {
        textAreaRef.current.select()
        document.execCommand('copy')

        e.target.focus()

    }
    const handleClose = () => {
        shareModelFn()
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={false || shareModelOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={shareModelOpen}>
                    <Box className={classes.shareCardContainer}>
                        <Typography component='h2' className={classes.modalTitle}>
                            Share app
                        </Typography>
                        <Typography component="p">
                            Shareable link
                        </Typography>
                        <Box position="relative">
                            <input ref={textAreaRef} className={classes.linkInput} type="text" readOnly value="https://www.skapp.com/UJJ5Rgbu2TMhttps://www.skapp.com/UJJ5Rgbu2TM" />
                            <Button onClick={copyToClipboard} className={classes.copyBtn}>
                                <CopyIcon />
                            </Button>
                        </Box>

                        <Typography component='p' className="s-links-title">
                            Share via social
                        </Typography>
                        <Box paddingTop=".5rem">
                            <a href='#d'>
                                <FBIcon />
                            </a>
                            <a href='#d'>
                                <TwitterIcon />
                            </a>
                            <a href='#d'>
                                <EmailIcon />
                            </a>
                        </Box>
                        <Button onClick={handleClose} className={classes.closeBtn}>
                            Close
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
ShareApp.defaultProps = {
    open: false
}