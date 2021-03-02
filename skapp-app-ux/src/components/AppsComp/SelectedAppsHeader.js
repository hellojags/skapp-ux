import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Typography } from '@material-ui/core'
// Custom Icon
import { ReactComponent as SelectAllIcon } from '../../assets/img/icons/select-cursor-item.svg'
import { ReactComponent as DeleteIcon } from '../../assets/img/icons/trash-delete-bin.3.svg'
import { ReactComponent as ShareIcon } from '../../assets/img/icons/share-arrow-square.1.svg'
import { ReactComponent as MoveIcon } from '../../assets/img/icons/move-arrows.svg'
import { ReactComponent as CrossIcon } from '../../assets/img/icons/close.svg'
// import classes from '*.module.css'
const useStyles = makeStyles({
    slectedAppsHeader: {
        boxShadow: '0px 1px 2px #15223214',
        borderRadius: 4,
        background: '#fff',
        padding: '2px',
        paddingRight: '.25rem',
        paddingLeft: '.25rem',
        marginTop: '.75rem',
        '& button': {
            background: '#fff!important',
            textTransform: 'none',
            "&:not(:first-child)": {
                marginLeft: '1rem',

            },
            '& > span > .btn-text': {
                marginLeft: '.75rem'
            }
        },
        '@media only screen and (max-width: 630px)': {

            '& > div:first-child': {
                width: '100%',
                justifyContent: 'space-between'
            },
            '& button': {
                padding: '6px 1px',
                "&:not(:first-child)": {
                    marginLeft: '0.15rem!important',

                },
                '& > span > .btn-text': {
                    marginLeft: '.2rem!important',
                    fontSize: '14px'
                },
                '& > span > svg': {
                    width: 20
                }
            },
        },
        '@media only screen and (max-width: 575px)': {
            marginTop: '0',
            marginBottom: '.75rem',
        }

    },
    closeBtn: {
        minWidth: 30,
        marginLeft: 10
    },
    selectedCount: {
        '@media only screen and (max-width: 630px)': {
            display: "none!important",
            width: 0
        },
    }
})
const SelectedAppsHeader = () => {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.slectedAppsHeader}>
            <Box component="div" display="flex" justifyContent="space-between" >
                <Button >
                    <SelectAllIcon />
                    <span className="btn-text">Select All</span>
                </Button>
                <Button >
                    <DeleteIcon />
                    <span className="btn-text" style={{ color: '#FF6060' }}>Delete</span>
                </Button>
                <Button >
                    <ShareIcon />
                    <span className="btn-text">Share</span>
                </Button>
                <Button >
                    <MoveIcon />
                    <span className="btn-text">Move to</span>
                </Button>

            </Box>
            <Box display="flex" className={classes.selectedCount}>
                <Typography component='span' >
                    5 Selected
                </Typography>
                <Button className={classes.closeBtn}>
                    <CrossIcon />
                </Button>
            </Box>

        </Box >
    )
}

export default SelectedAppsHeader
