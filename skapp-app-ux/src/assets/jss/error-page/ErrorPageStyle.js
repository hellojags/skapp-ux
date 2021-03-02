const errorPageStyle = {
    text: {
        color: '#1DBF73',
        fontSize: 26,
        fontWeight: 700,
        marginTop: '2rem',
        '@media only screen and (max-width: 1440px)': {
            fontSize: 22,
        },
        '@media only screen and (max-width: 575px)': {
            fontSize: 20,
            marginTop: '1rem',
        }

    },
    h1: {
        fontSize: 82,
        color: '#242F57',
        marginTop: '-80px',
        '@media only screen and (max-width: 1440px)': {
            marginTop: '-90px',
        },
        '@media only screen and (max-width: 575px)': {
            marginTop: '-100px',
            fontSize: 42,
        }
    },
    small: {
        fontSize: 14,
        color: '#242F57',
        marginTop: '10px',
        '& > a': {
            color: '#1DBF73',
            textDecoration: 'none',
        }
    },

    errorIcon: {
        '@media only screen and (max-width: 1440px)': {
            width: '330px'
        },
        '@media only screen and (max-width: 575px)': {
            width: '230px'
        }
    }

}
export default errorPageStyle