// import appListStyle from "./AppListStyle"

const appCardStyle = {
    root: {
        maxWidth: 'auto',
        borderRadius: 10,
        boxShadow: ' 0px 1px 4px #15223214',
    },
    media: {
        height: 200,
        // '@media(max-width: 1390px)': {
        //     height: 180,
        //     backgroundSize: 'cover'
        // },
        borderRadius: 8,
        overflow: 'hidden',
        margin: '.75rem',
        marginBottom: 0,
        backgroundSize: 'cover',
        '@media only screen and (max-width: 575px)': {
            height: 144,
            marginTop: 7,
            margin: '5px',
        },
    },
    heartBtn: {
        marginRight: '.5rem',
        '@media only screen and (max-width: 575px)': {
            width: '22px',
            marginRight: '0',
        },

    },
    shareBtn: {
        '@media only screen and (max-width: 575px)': {
            width: '22px',
        },
    },
    cardActionArea: {
        color: '#fff',
        '&:hover': {
            // background: '#fff!important',
            opacity: 1
        }
    },
    cardH2: {
        fontWeight: 700,
        color: '#000',
        '@media only screen and (max-width: 575px)': {
            fontSize: '15px'
        }
    },
    cardContent: {
        marginTop: 0,
        paddingTop: '.75rem',
        // paddingBottom: '.65rem',
        paddingBottom: 0,
        '@media only screen and (max-width: 575px)': {
            paddingTop: '0',
            paddingLeft: 7,
            paddingRight: 7,
        }

    },
    cardFooterIcon: {
        // width: '17px',
        marginRight: '5px',
        '@media only screen and (max-width: 575px)': {
            marginRight: '0',
            fontSize: 7,
            width: 7,
            marginBottom: 1
        }
    },
    footerItem: {
        opacity: .64,
        marginLeft: '.7rem',
        '&:first-child': {
            marginLeft: 0
        },
        '& .MuiSvgIcon-root': {
            fontSize: 17,
            marginLeft: '0!important',

        },
        '@media only screen and (max-width: 575px)': {
            marginLeft: '.2rem'
        }

    },
    versionBtn: {
        height: 22,
        backgroundColor: '#9d9d9d33',
        color: '#9D9D9D',
        '@media only screen and (max-width: 575px)': {
            fontSize: 7,
            minWidth: 55
        }
    },
    cardSmallText: {
        '@media(max-width: 1400px)': {
            fontSize: 12
        },
        '@media only screen and (max-width: 575px)': {
            fontSize: 9
        }
    },
    shareAndSaveBtn: {

        '@media only screen and (max-width: 575px)': {
            display: 'flex'
        }
    }
    ,
    ratingDiv: {
        opacity: 1,
        // alignItems: 'center'

    },
    detailsArea: {
        paddingTop: 0,
        paddingBottom: 0,
        '& .MuiBox-root': {
            paddingTop: 0
        }
    },
    installBtn: {
        backgroundColor: '#1DBF73',
        color: '#fff',
        padding: '.25rem 2rem',
        '&:hover': {
            backgroundColor: '#1DBF73',
            color: '#fff',
        },
        fontSize: '12px',
        '@media (max-width: 1440px)': {
            padding: '.25rem 1rem',

        },
        '@media only screen and (max-width: 575px)': {
            fontSize: '10px',
            marginTop: '1px',
            marginBottom: '7px',
            minWidth: '90px'
        },
    },
    bgUnistall: {
        backgroundColor: '#FF6060!important',
    },
    bgUpdate: {
        backgroundColor: '#1DBF73!important'
    },
    tags: {
        marginTop: 3,
        color: '#9D9D9D',
        width: '155px',
        justifyContent: 'space-between',
        marginRight: 'auto!important',
        marginLeft: '15px',
        '@media only screen and (max-width: 575px)': {
            // marginRight: 'auto!important',
            marginRight: '0!important',
        },

    },
    footerBottom: {
        padding: '.6rem .9rem',
        paddingTop: '5px',

        paddingBottom: ".75rem",
        '@media only screen and (max-width: 575px)': {
            flexDirection: 'column-reverse',
            padding: '.2rem .5rem',
        },
    },
    checkBox: {
        position: 'absolute',
        zIndex: 9,
        // right: '8px',
        // top: '8px',
        background: 'transparent',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        // opacity: '.62',
        '& svg': {
            position: 'absolute',
            right: '15px',
            top: '15px',
            fontSize: 40,
            color: '#fff',
            '@media only screen and (max-width: 575px)': {
                right: '7px',
                top: '8px',
            }
        }
    },
    checkedIcon: {
        color: '#1DBF73!important',
        width: 24,
        transform: 'translateX(-8px)'
    }


}
export default appCardStyle