import React, { Fragment, useState } from 'react'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        paddingLeft: '.8rem',
        paddingRight: '.8rem',
        background: '#fff',
        textTransform: 'none',
        minWidth: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 1px 2px #15223214',
        border: '1px solid #7070701A;',
        color: '#7E84A3',
        '&:hover': {
            background: '#fff'
        },
        marginLeft: '1rem'
    },
    IconColorGray: {
        color: '#7E84A3'
    },
    IconColorF: {
        color: '#fff'
    },
    greenFilled: {
        background: '#1DBF73!important',
        color: '#fff'
    },
    defaultColor: {
        background: '#fff'
    }
})
const SelectItem = () => {
    const [slecte, setSlecte] = useState(false)

    const classes = useStyles()
    const clickHandle = () => {
        slecte ? setSlecte(false) : setSlecte(true)
    }
    return (
        <Fragment>
            <Button
                className={`${classes.btn} ${slecte ? classes.greenFilled : classes.defaultColor}`}
                aria-haspopup="true"
                onClick={clickHandle}
            >
                <CheckCircleOutlinedIcon className={`${classes.btnIcon} ${slecte ? classes.IconColorF : classes.IconColorGray}`} fontSize="small" />

                <span className="secon-nav__ItemText"> Select </span>

            </Button>
        </Fragment>
    )
}

export default SelectItem
