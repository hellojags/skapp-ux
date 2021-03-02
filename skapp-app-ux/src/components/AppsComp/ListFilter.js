import React, { Fragment } from 'react'
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as FilterIcon } from '../../assets/img/icons/Filter, Settings, Sort.svg'
import useWindowDimensions from '../../hooks/useWindowDimensions'
const useStyles = makeStyles(theme => ({
    dropArrow: {
        color: '#323232'
    },
    utilBtn: {
        background: '#fff',
        textTransform: 'none',
        minWidth: '175px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 1px 2px #15223214',
        border: '1px solid #7070701A;',
        '&:hover': {
            background: '#fff'
        },
        '@media only screen and (max-width: 1249px)': {
            marginLeft: '1rem'
        }
    },
    textColor: {
        color: '#7E84A3'
    },
    popper: {
        zIndex: 9
    }
}))
function ListFilter() {
    const { width } = useWindowDimensions()
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef(null)
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    return (
        < Fragment >

            <Button
                className={`${classes.utilBtn} ${classes.textColor}`}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <FilterIcon />

                <span className="secon-nav__ItemText">

                    {width <= 575 ? 'Sort' : 'Latest First'}

                </span>

                {open ? <ExpandLess className={classes.dropArrow} /> : <ExpandMore className={classes.dropArrow} />}
            </Button>


            <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Fragment>
    )
}

export default ListFilter
