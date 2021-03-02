const hostingItemStyle = {
    root: {
        padding: '18px',
        backgroundColor: '#fff',
        borderRadius: 15,
        border: '0px 1px 2px #15223214',
        '&:not(:last-child)': {
            marginBottom: 10,

        }
    },
    HostingImgContainer: {
        '& img': {
            border: '1px solid #70707059',
            borderRadius: 12,
            width: '100%'
        },
        '@media only screen and (max-width: 800px)': {
            display: 'none'
        }
    },
    h2: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 8
    },
    verisonAndLink: {
        opacity: 0.71,
        '&  svg': {
            marginLeft: 10
        },
        '& > span': {
            marginLeft: 15,
            fontSize: 14,
            fontWeight: 300
        },
        marginBottom: 8
    },
    ActiveBtn: {
        backgroundColor: '#1dbf7345!important',
        color: '#1dbf73',
        minWidth: 120,
        '@media only screen and (max-width: 450px)': {
            minWidth: '100%',

        }
    },
    inActiveBtn: {
        backgroundColor: '#FF606045!important',
        color: '#FF6060',
        minWidth: 120,
        '@media only screen and (max-width: 450px)': {
            minWidth: '100%',

        }
    },
    updateText: {
        opacity: 0.71,
        fontWeight: 300

    },
    editBtn: {
        backgroundColor: '#F5F6FA',
        '& svg': {
            fontSize: 18,
            color: '#7E84A3'
        },
        minWidth: 36,
        '@media only screen and (max-width: 450px)': {
            marginTop: 5
        }

    },
    manageBtn: {
        backgroundColor: '#F5F6FA',
        '& svg': {
            fontSize: 18,
            color: '#7E84A3',
            marginLeft: 5,
            marginRight: 5,

        },
        '&  span > span': {
            marginRight: 8
        },
        color: '#7E84A3',
        '@media only screen and (max-width: 450px)': {
            flex: 1,
            marginTop: 5
        }

    },
    btnContainer: {
        marginTop: '13px',
        '& button:not(:last-child)': {
            marginRight: 5,

        },
        '@media only screen and (max-width: 450px)': {

            flexWrap: 'wrap'
        }
    },
    detailsCol: {
        paddingLeft: '2rem',
        '@media only screen and (max-width: 800px)': {
            paddingLeft: 0,
        }
    },
    moreBtn: {
        position: "absolute",
        right: 0,
        top: 0,
    },
}
export default hostingItemStyle