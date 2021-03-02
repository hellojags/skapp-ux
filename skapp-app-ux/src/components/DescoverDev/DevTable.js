import React, { useState, Fragment } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH as MoreIcon } from '@fortawesome/free-solid-svg-icons'
// import { ReactComponent as DomainListIcon } from '../../assets/img/icons/listicon.svg'
import { ReactComponent as Arrows } from '../../assets/img/icons/arrows-diagrams-02.svg'

import { Box, Button, Checkbox, IconButton } from '@material-ui/core'
import Spiner from '../AppsComp/Spiner'

const useStyles = makeStyles({
    table: {
        minWidth: 850,
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
                padding: 0,
                color: '#000',
                // lineHeight: '',
                background: '#F0F5F7',
                '& svg': {
                    marginLeft: '5px',
                    width: 18
                },
                '&:first-child': {
                    borderRadius: '5px 0 0px 5px',
                    paddingLeft: 5
                },
                '&:last-child': {
                    paddingRight: 10,
                    borderRadius: '0px 5px 5px 0px'
                }
            }
        },
        '& tr th, & tr td': {
            padding: '10px 0',
            fontSize: 18,
            '@media only screen and (max-width: 1440px)': {
                fontSize: 16
            },
        },
        '& tr th': {
            '&:first-child': {
                borderRadius: '5px 0 0px 5px'
            },
            '&:last-child': {
                borderRadius: '0px 5px 5px 0px'
            }
        },
        '& tr td': {
            borderBottom: '1px solid #7070702b',
            '&:first-child': {

                paddingLeft: 5
            },
            '&:last-child': {
                paddingRight: 10,

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
    },
    devAvtar: {
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.3)'
    },
    followBtn: {
        width: 110,
        background: '#1DBF73!important',
        color: '#fff'
    },
    moreIconV: {
        transform: 'rotate(90deg)'
    }
})

// function createData(domainName, type, status, action) {
//     return { domainName, type, status, action }
// }

// const rows = [
//     // createData('skyspaces.io', 'External DNS', true, { actionType: '' }),
//     // createData('cloudean.com', 'External DNS', false,),
//     // createData('mysite.net', 'External DNS', true,),
// ]

const DevTable = () => {
    const classes = useStyles()
    const inialS = Array.from({ length: 12 })
    const [items, setItems] = useState(inialS)

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 10 })))
            // items: items.concat(Array.from({ length: 20 }))
        }, 1500)
    }
    return (
        <Fragment>
            <InfiniteScroll
                scrollableTarget='app-content'
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<Spiner />}
            >
                <TableContainer className={classes.paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </TableCell>
                                <TableCell>
                                    Avatar
                            </TableCell>
                                <TableCell>Skapp ID</TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems='center'>
                                        <span>Developer Name </span><Arrows />
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems='center'>
                                        <span>Location </span><Arrows />
                                    </Box></TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems='center'>
                                        <span>Git ID </span><Arrows />
                                    </Box></TableCell>

                                <TableCell>
                                    <Box display="flex" alignItems='center'>
                                        <span>Following </span><Arrows />
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems='center'>
                                        <span>Apps </span><Arrows />
                                    </Box>
                                </TableCell>

                                <TableCell > Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((i, index) => (
                                <TableRow >
                                    <TableCell scope="row">
                                        <Checkbox
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <img className={classes.devAvtar} src="https://i.pravatar.cc/40" alt="" />
                                    </TableCell>
                                    <TableCell>
                                        SK878
                    </TableCell>
                                    <TableCell>
                                        Brandon McCoy
                    </TableCell>
                                    <TableCell>
                                        Bahamas
                    </TableCell>
                                    <TableCell>
                                        @ualss
                    </TableCell>
                                    <TableCell>
                                        15
                    </TableCell>
                                    <TableCell>
                                        2.5K
                    </TableCell>
                                    <TableCell >
                                        <Box display="flex" justifyContent="space-between">
                                            <Button className={classes.followBtn}>
                                                Follow
                        </Button>
                                            <IconButton size="small">
                                                <FontAwesomeIcon className={classes.moreIconV} size="small" icon={MoreIcon} />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                </TableContainer>
            </InfiniteScroll>
        </Fragment>
    )
}
export default DevTable