import React, { Fragment } from 'react'
// import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        paddingLeft: '.8rem',
        paddingRight: '.8rem',
        background: '#1DBF73',
        textTransform: 'none',
        minWidth: '130px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 1px 2px #15223214',
        border: '1px solid #7070701A;',
        color: '#fff',
        '&:hover': {
            background: '#1DBF73'
        },
        marginLeft: '1rem'
    },
    btnIcon: {
        color: '#fff'
    },
})
const SubmitBtn = ({ addSite, styles, children }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <Button
                style={styles}
                className={`${classes.btn} ${classes.slected}`}
                // aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
            >
                <AddOutlinedIcon className={classes.btnIcon} fontSize="small" />

                <span className="secon-nav__ItemText"> {children} </span>
            </Button>
        </Fragment>
    )
}

export default SubmitBtn
