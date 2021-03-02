
import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { ReactComponent as ImgIcon } from '../../assets/img/icons/imgPlace.svg'
const useStyles = makeStyles((theme) => ({
    ProfileRoot: {
        backgroundColor: '#fff',
        boxShadow: '0px 2px 5px #15223214',
        borderRadius: 6,
        padding: '50px 30px',
        '@media only screen and (max-width: 575px)': {
            padding: '20px 10px',
        },
        '& h2': {
            color: '#242F57',
            marginBottom: '1rem',
            '@media only screen and (max-width: 575px)': {
                fontSize: 22,
            },
        }
    },
    textInfo: {
        color: '#000',
        fontSize: 14,
        '@media only screen and (max-width: 575px)': {
            fontSize: 13,
        },
    },
    profilePlaceholder: {
        width: 100,
        height: 100,
        background: '#EFF5F7',
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        '& svg': {
            fontSize: 89,
            // marginTop: '2.9rem',
            color: '#B4C6CC'
        },
        marginRight: '1.2rem',
        '@media only screen and (max-width: 575px)': {
            width: 75,
            height: 75,
            '& svg': {
                fontSize: 45,
                // marginTop: '2.9rem',
                color: '#B4C6CC'
            },
        }
    },
    btnUpload: {
        backgroundColor: '#869EA6!important',
        color: '#fff',
        fontSize: 14,
        minWidth: 150,
        '@media only screen and (max-width: 575px)': {
            fontSize: 12,
            height: 40
        },
        '& svg': {
            marginRight: 7
        }
    },
    textHelper: {
        fontSize: 13,
        color: '#5C757D',
        marginTop: 5,
        '@media only screen and (max-width: 575px)': {
            fontSize: 12,
        },
    },
    form: {
        marginTop: 20
    },
    label: {
        display: 'block',
        marginTop: 10,
        marginBottom: 8,
        fontWeight: 600,
        fontSize: 14,
        '@media only screen and (max-width: 575px)': {
            marginTop: 0,
            marginBottom: 5,
        },
    },
    input: {
        border: '1px solid #E4EDF0',
        borderRadius: 8,
        height: 45,
        padding: 10,
        fontSize: 14,
        width: '100%',
        '@media only screen and (max-width: 575px)': {
            fontSize: 12,
            height: 40
        },
        '&:focus': {
            outline: 'none',
            border: '1px solid #1DBF73',
        }
    },
    firstInput: {
        marginTop: 5,
        '@media only screen and (max-width: 575px)': {
            marginBottom: 10
        },
    }
}))
const Profile = () => {
    const classes = useStyles()
    return (
        <div className={classes.ProfileRoot}>
            <h2>Account</h2>
            <Typography className={classes.textInfo}>
                This information can be edited from your profile page.
            </Typography>

            <form className={classes.form}>
                <Box display="flex" alignItems="center" className={classes.firstInput}>
                    <div className={classes.profilePlaceholder}>
                        {/* <img src={} alt="" /> */}
                        <PersonOutlineIcon className={classes.avatarIcon} />
                    </div>
                    <div>
                        <Button className={classes.btnUpload}>
                            <ImgIcon />
                            Upload Image
                        </Button>
                        <div className={classes.textHelper}>Max. size of 8 MB in: JPG or PNG.</div>
                    </div>
                </Box>
                <Grid container className={classes.ContainerRoot} spacing={2}>
                    <Grid item xs={12} sm={6} md={6}  >
                        <label htmlFor="firstName" className={classes.label}>First Name</label>
                        <input className={classes.input} type="text" placeholder="Enter first name" value="Fernando" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}  >
                        <label htmlFor="firstName" className={classes.label}>Last Name</label>
                        <input className={classes.input} type="text" placeholder="Enter list name" value="Cabral" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}  >
                        <label htmlFor="firstName" className={classes.label}>Email</label>
                        <input className={classes.input} type="email" required placeholder="Enter email address" value="email@emial.com" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}  >
                        <label htmlFor="firstName" className={classes.label}>Phone Number</label>
                        <input className={classes.input} type="text" placeholder="Enter number" value="+92 00000000" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}  >
                        <label htmlFor="firstName" className={classes.label}>Short description</label>
                        <input className={classes.input} type="text" placeholder="Enter Short description" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}  >
                        <label htmlFor="firstName" className={classes.label}>Twitter</label>
                        <input className={classes.input} type="text" placeholder="Enter Twitter profile link" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}  >
                        <label htmlFor="firstName" className={classes.label}>GitHub</label>
                        <input className={classes.input} type="text" placeholder="Enter GitHub profile link" />
                    </Grid>
                    <input type="submit" hidden />
                </Grid>
            </form>
        </div>
    )
}

export default Profile
