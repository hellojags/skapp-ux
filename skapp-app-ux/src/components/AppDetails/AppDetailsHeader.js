import React from 'react'
import { Box, Button, IconButton, makeStyles, Typography } from '@material-ui/core'
// Icons
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import { ReactComponent as HeartIcon } from '../../assets/img/icons/Heart.svg'
import { ReactComponent as ShareIcon } from '../../assets/img/icons/share.1.svg'
import { ReactComponent as MsgIcon } from '../../assets/img/icons/Messages, Chat.15.svg'
import { ReactComponent as StarIcon } from '../../assets/img/icons/star-favorite.svg'
// img import
import cubsImg from '../../assets/img/cubs.png'
const useStyles = makeStyles({
    AppHeaderContainer: {
        paddingLeft: '40px',
        paddingRight: '30px',
        paddingTop: '25px',
        background: '#1DBF73',
        color: '#fff',
        borderRadius: 15,
        '@media only screen and (max-width: 575px)': {
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '25px',
        }
    },
    HeartIcon: {
        '& #Path_52298': {
            stroke: '#fff'
        },
        // color: '#fff'
    },
    ShareIcon: {
        '& g > path': {
            stroke: '#fff'
        },
    },
    MsgIcon: {
        '& path:not(:first-child)': {
            stroke: '#fff'
        },
        transform: "scale(1.4)",
        marginRight: '8px',
        '@media only screen and (max-width: 575px)': {
            transform: "scale(1.2)",
            marginRight: '4px',
            '& p': {
                fontSize: 14
            }
        }
    },
    StarIcon: {
        '& path:not(:first-child)': {
            stroke: '#fff',
            fill: '#fff'
        },
        transform: "scale(1.4)",
        marginRight: '8px',

        '@media only screen and (max-width: 575px)': {
            transform: "scale(1.2)",
            marginRight: '4px',

            '& p': {
                fontSize: 14
            }
        }
    },
    h1: {
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: 1,
        marginTop: 5,
        marginBottom: 10,
        '@media only screen and (max-width: 575px)': {
            fontSize: '25px',
        }
    },
    programBtn: {
        background: 'rgba(255,255,255,0.2)!important',
        color: '#fff',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: 10,
        fontWeight: 400,
        marginTop: '.8rem'
    },
    installBtn: {
        background: '#fff!important',
        minWidth: 165,
        margin: '22px 0',
        fontSize: 12,
    },
    text: {
        fontSize: 18,
        lineHeight: '21px',
        '@media only screen and (max-width: 575px)': {
            fontSize: '14px',
            lineHeight: '17px',
        }
    },
    box1: {
        maxWidth: '1130px'
    },
    box2: {
        textAlign: 'center',
        '@media only screen and (max-width: 575px)': {
            display: 'none'
        }
    },
    favrIcon: {
        marginLeft: '1.3rem',

        '@media only screen and (max-width: 575px)': {
            marginLeft: '.7rem'
        }
    },
    sharIcon: {
        marginLeft: '.5rem',

        '@media only screen and (max-width: 575px)': {
            marginLeft: '0'
        }
    },
    VisiIconContainer: {
        marginRight: '1rem',
        '@media only screen and (max-width: 575px)': {
            marginRight: '8px'
        }
    },
    msgIconContainer: {
        marginRight: '1rem',
        '@media only screen and (max-width: 575px)': {
            marginRight: '8px'
        }
    }
})
const AppDetailsHeader = () => {
    const classes = useStyles()
    return (
        <Box className={classes.AppHeaderContainer} display='flex'>
            <Box className={classes.box1}>
                <Box display='flex' width='100%' >
                    <Box display="flex" alignItems="center" className={classes.VisiIconContainer}>
                        <VisibilityOutlinedIcon />
                        <Typography >
                            2.5k
                    </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" className={classes.msgIconContainer}>
                        <MsgIcon className={classes.MsgIcon} />
                        <Typography >
                            1.3k
                    </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" marginRight="0">
                        <StarIcon className={classes.StarIcon} />
                        <Typography>
                            5.0 (1k+)
                        </Typography>
                    </Box>
                    <Box className={classes.favrIcon}>
                        <IconButton aria-label="Favourite Button" size="small">
                            <HeartIcon className={classes.HeartIcon} />
                        </IconButton>
                    </Box>
                    <Box className={classes.sharIcon}>
                        <IconButton aria-label="Share Button" size="small" >
                            <ShareIcon className={classes.ShareIcon} />
                        </IconButton>
                    </Box>
                </Box>
                <Box marginTop="10px">
                    <Typography >
                        Skapp
                    </Typography>
                    <Typography component='h1' className={classes.h1}>
                        SkySpaces
                    </Typography>
                    <Typography component='p' className={classes.text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                    </Typography>
                    <Button size="small" className={classes.programBtn}>
                        Programms
                    </Button>
                    <Box>
                        <Button className={classes.installBtn}>+ Install</Button>
                    </Box>
                </Box>
            </Box>
            <Box alignSelf='center' className={classes.box2} flex={1}>
                <img src={cubsImg} alt="igm" />
            </Box>
        </Box>
    )
}

export default AppDetailsHeader
