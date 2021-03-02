const noAppsStyle = {
    h1: {
        fontSize: 28,
        color: '#131523',
        '@media only screen and (max-width: 575px)': {
            fontSize: 18,
        }
    },
    boxIcon: {
        background: '#1DBF73',
        display: 'inline-flex',
        padding: 14,
        borderRadius: 22,
        marginBottom: '1.8rem',
        '@media only screen and (max-width: 575px)': {
            marginBottom: '1.5rem',
            padding: 10,
            maxWidth: 85
        }
    },
    h2: {
        fontSize: 32,
        color: '#333333',
        fontWeight: 800,
        '@media only screen and (max-width: 575px)': {
            fontSize: 25,
            fontWeight: 600,
        }
    },
    p: {
        color: '#5A607F',
        '@media only screen and (max-width: 575px)': {
            fontSize: 14,
        }
    },
    button: {
        background: '#1DBF73!important',
        boxShadow: '0px 1px 2px #00000029',
        borderRadius: 4,
        color: '#fff',
        display: 'block',
        minWidth: 180,
        maxWidth: 200,
        paddingTop: 7,
        paddingBottom: 7,
        fontSize: '16px',
        marginTop: '1.9rem',
        '@media only screen and (max-width: 575px)': {
            marginTop: '1rem',
            fontSize: 14
        }

    },
    domainIcon: {
        marginBottom: '1rem',
        '@media only screen and (max-width: 575px)': {
            width: 130,
            marginBottom: 0,
        }
    }
}
export default noAppsStyle