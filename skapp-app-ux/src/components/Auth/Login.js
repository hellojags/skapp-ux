import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/icons/logo.svg'
import { ReactComponent as SiteLogoGray } from '../../assets/img/icons/siteLogoGray.svg'

const useStyles = makeStyles({
    input: {
        '&:focus': {
            outline: 'none',
            borderColor: '#1DBF73'
        },
        background: '#fff',
        border: '1px solid #D9E1EC',
        borderRadius: 8,
        height: 45,
        width: '100%',
        fontSize: 18,
        padding: 20,
        '@media only screen and (max-width: 1440px)': {
            height: 45,
            // width: '100%',
            fontSize: 16,
            padding: 15,
        },
        '@media only screen and (max-width: 575px)': {
            height: 45,
            // width: '100%',
            fontSize: '14px !important',
            padding: 10,
        }

    },
    loginFormContainer: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    poweredBy: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& span': {
            color: '#4E4E4E'
        },
        marginTop: '2.5rem',
        marginBottom: '3.5rem'
    }
})
const Login = () => {
    const classes = useStyles()
    return (
        <div className={classes.loginFormContainer}>
            <form className="login-form">
                <div>
                    <Logo />
                    <h3>Sign In to Skapp</h3>
                    <p>
                        <small>
                            Enter your secret key to continue <span className="secrect-key">Create a Secret Key</span>
                        </small>

                    </p>
                    <input className={classes.input} type="text" placeholder="12 - Word Secret Key" />
                    {/* type="submit" */}
                    <Button type="submit">Continue
                   <Link to="/apps" className="link" />

                    </Button>

                    <div className={classes.poweredBy}>
                        <span>Powered by </span><SiteLogoGray />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
