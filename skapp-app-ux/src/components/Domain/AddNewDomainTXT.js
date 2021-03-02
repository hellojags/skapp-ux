import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, makeStyles, Modal, Typography } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    modalHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
        borderBottom: '1px solid #70707085',
        padding: '1.3rem',
        '@media only screen and (max-width: 1440px)': {
            fontSize: 24,
            padding: '1rem',
        }
    },
    root: {
        width: 1180,
        maxWidth: '95%',
        boxShadow: '0px 2px 5px #15223221',
        borderRadius: 15,
        opacity: 1,
        '&, &:focus': {
            background: '#fff',
            border: 0,
            outline: 0,

        },

    },
    inputContainer: {
        '& input': {
            borderRadius: 10,
            paddingLeft: '1rem',
            paddingRight: '1rem',
            flex: 1,
            height: 60,
            fontSize: 21,
            '@media only screen and (max-width: 575px)': {
                flex: '100%',
                marginBottom: 8, borderRadius: 10
            },
            border: '1px solid #D9E1EC',
            '&:focus': {
                border: '1px solid #1DBF73',
                outline: 0
            },
            '@media only screen and (max-width: 1440px)': {
                height: 50,
                fontSize: 18,
            },

        },
        '@media only screen and (max-width: 575px)': {
            flexWrap: 'wrap',
            fontSize: 16,

        }
    },
    label: {
        fontSize: 21,
        color: '#5A607F',
        marginBottom: 10,
        display: 'block',
        marginTop: '1rem',
        '@media only screen and (max-width: 1440px)': {
            fontSize: 19,
        },
        '@media only screen and (max-width: 575px)': {
            fontSize: 16,
            marginTop: 9,

        }

    },
    submitBtn: {
        // height: '100%',
        borderRadius: 5,
        backgroundColor: '#1DBF73!important',
        minWidth: 210,
        color: '#fff',
        fontSize: 21,
        fontWeight: 300,
        '@media only screen and (max-width: 1440px)': {
            fontSize: 18,
        },
        '@media only screen and (max-width: 575px)': {
            flex: '100%',
            borderRadius: 10,
            fontSize: 18,
            height: 50,
            width: '100%'
        }
    },
    form: {

        marginLeft: 'auto',
        marginRight: 'auto',
        // '@media only screen and (max-width: 1440px)': {
        //     marginTop: 60,
        //     marginBottom: 120,
        // },
        // '@media only screen and (max-width: 575px)': {
        //     marginTop: 50,
        //     marginBottom: 90,
        // }

    },
    varifyText: {
        color: "#1DBF73",
        fontWeight: 'bold',
        marginTop: '1rem',
        '@media only screen and (max-width: 575px)': {
            marginTop: 17,
        }
    },
    contentContainer: {
        paddingRight: '7%',
        paddingLeft: '4%',
        paddingBottom: '4%',
        '@media only screen and (max-width: 575px)': {
            paddingRight: '20px',
            paddingLeft: '20px',
            paddingBottom: '35px',
        }

    },
    subheading: {
        color: '#333333',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: '1rem',

        '@media only screen and (max-width: 575px)': {
            fontSize: 18,
            marginTop: 9,

        }
    },
    p: {
        color: '#5A607F'
    },
    checkBox: {
        marginTop: 10,
        marginBottom: 10,

        '& span': {
            color: '#5A607F',
            '@media only screen and (max-width: 575px)': {
                fontSize: 16,
            },
        },

        '@media only screen and (max-width: 575px)': {
            // flex: '100%',
            // borderRadius: 10,
            // fontSize: 18,
            // height: 50
        }
    }
}))
const AddNewDomainTXT = () => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(true)

    // const handleOpen = () => {
    //     setOpen(true)
    // }

    const handleClose = () => {
        setOpen(false)
    }
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }
    return (

        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className={classes.root}>
                        <div className={classes.modalHeader}>
                            New Custom Domain
                        </div>
                        <div className={classes.contentContainer}>
                            <Typography className={classes.varifyText}>
                                Verification
                            </Typography>
                            <Typography className={classes.subheading}>
                                Add New TXT record to skapp.io
                            </Typography>
                            <p className={classes.p}>TXT records are simple text  notes for your domain and won't affect your email or website settings.</p>
                            <form className={classes.form}>
                                <label className={classes.label} htmlFor="domainName">Name/Host</label>
                                <Box display="flex" className={classes.inputContainer}>
                                    <input type="text" id="domainName" placeholder='Enter host name' />
                                </Box>
                                <label className={classes.label} htmlFor="domainName">Value / Answer / Destination</label>
                                <Box display="flex" className={classes.inputContainer}>
                                    <input type="text" id="domainName" placeholder='add' value="sdf6ds4fsd5f46dsf5ds6f5ds46f6sdf45sdf46sd4f65sdf46" />
                                </Box>
                                <FormControlLabel
                                    className={classes.checkBox}
                                    control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="I added TXT Versification Records"
                                />
                                <Box>
                                    <Button className={classes.submitBtn} onClick={handleClose} > Next</Button>
                                </Box>
                            </form>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default AddNewDomainTXT
