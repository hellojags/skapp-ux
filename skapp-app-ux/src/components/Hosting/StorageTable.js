import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt as DeleteIcon } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as DomainListIcon } from '../../assets/img/icons/listicon.svg'
import { ReactComponent as Arrow } from '../../assets/img/icons/arrowdow.svg'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import { Box, IconButton, MenuItem } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    paper: {
        marginTop: 10,
        "& th, & td": {
            border: 0
        },
        '& tbody tr th ~ td:not(:last-child)': {
            color: '#6E77AA',
            fontWeight: 'normal'
        },
        '& tbody th': {
            fontWeight: 700
        },
        '& thead': {

            '& th': {
                color: '#fff',
                lineHeight: '.8rem',
                background: '#1DBF73',

            }
        },
        '& tr th, & tr td': {
            fontSize: 18,
            '@media only screen and (max-width: 1440px)': {
                fontSize: 16
            },
            '&:first-child': {
                borderRadius: '5px 0 0px 5px'
            },
            '&:last-child': {
                borderRadius: '0px 5px 5px 0px'
            }
        },
        '& table': {
            borderCollapse: 'separate',
            borderSpacing: '0 8px'
        },
        '& tbody tr td,& tbody tr th': {
            background: '#fff'
        },
        '& tbody th svg': {
            marginRight: 10
        }
    },
    statusWorking: {
        color: '#1DBF73'
    },
    statusError: {
        color: '#FF6060'
    },
    arrow: {
        marginLeft: 10
    },
    menuAction: {


        marginTop: '3.4rem',
        '& ul': {
            minWidth: 230,
            '& li': {
                fontSize: 18,
                paddingBottom: 12,
                '@media only screen and (max-width: 1440px)': {
                    fontSize: 16
                }
            }
        },
        '& .MuiPaper-root': {
            boxShadow: '0px 3px 6px #00000029',
            border: '1px solid #7070704F', overflow: 'visible'
        },
        '& .MuiPaper-root::before': {
            content: '""',
            width: 0,
            height: 0,
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            borderRight: '14px solid #70707057',
            position: 'absolute',
            top: '-22px',
            right: 19,
            transform: 'rotate(90deg)'
        },
        '& .MuiPaper-root::after': {
            content: '""',
            width: 0,
            height: 0,
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            borderRight: '14px solid #fff',
            // position: 'relative',
            position: 'absolute',
            top: '-21px',
            right: 19,
            transform: 'rotate(90deg)'
        }
    },
    colorDanger: {
        color: '#FF6060'
    }
})

function createData(portalName, portalURL, portalType, actions) {
    return { portalName, portalURL, portalType, actions }
}

const rows = [
    createData('skyspaces.io', 'https://www.skyspaces.io', 'Portal Type',),
    createData('cloudean.com', 'https://www.skyspaces.io', 'Portal Type',),
    createData('mysite.net', 'https://www.skyspaces.io', 'Portal Type',),
]

const StorageTable = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    // const [clicked, setClicked] = React.useState(false)

    // const handleClick = (event) => {
    //     setClicked(true)
    //     setAnchorEl(event.currentTarget)
    // }

    const handleClose = () => {
        // setClicked(false)
        setAnchorEl(null)
    }
    return (
        <Fragment>
            <TableContainer className={classes.paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Portal name
                            <Arrow className={classes.arrow} />
                            </TableCell>
                            <TableCell>Portal URL</TableCell>
                            <TableCell>Portal Type</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.portalName}>
                                <TableCell component="th" scope="row">
                                    <Box display="flex" component="span" alignItems="center">
                                        <DomainListIcon /> <span>{row.portalName}</span>
                                    </Box>
                                </TableCell>
                                <TableCell>{row.portalURL}</TableCell>
                                <TableCell>{row.portalType}</TableCell>

                                <TableCell align="right">
                                    <IconButton size="small" style={{ marginRight: '1rem' }} >
                                        <CreateOutlinedIcon style={{ color: '#323232' }} />
                                    </IconButton>
                                    <IconButton size="small" >
                                        <FontAwesomeIcon color='#323232' icon={DeleteIcon} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Menu
                className={classes.menuAction}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    getContentAnchorEl: null
                }}
            >
                <MenuItem onClick={handleClose}>Edit Settings</MenuItem>
                <MenuItem onClick={handleClose}>Manage DNS</MenuItem>
                <MenuItem onClick={handleClose}>Setup Email</MenuItem>
                <MenuItem onClick={handleClose}>Create Website</MenuItem>
                <MenuItem onClick={handleClose} className={classes.colorDanger}>Delete Domain</MenuItem>

            </Menu>
        </Fragment>
    )
}
export default StorageTable