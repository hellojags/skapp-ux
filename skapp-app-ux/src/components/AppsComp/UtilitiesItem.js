import React, { Fragment } from 'react'
import { Box, Button, FormControl, MenuItem, Select } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
// import Select from 'react-select/src/select'
const data = [
    {
        value: 'Item 1',
        aviableRes: 2
    },
    {
        value: 'Item 2',
        aviableRes: 45
    },
    {
        value: 'Item 3',
        aviableRes: 25
    },
    {
        value: 'Item 4',
        aviableRes: 29
    },
    {
        value: 'Item 5',
        aviableRes: 90
    },
    {
        value: 'Item 6',
        aviableRes: 9
    },
    {
        value: 'Item 7',
        aviableRes: 78
    },
    {
        value: 'Item 8',
        aviableRes: 14
    }

]
const useStyles = makeStyles(theme => ({
    dropArrow: {
        color: '#323232'
    },
    utilBtn: {
        background: '#fff',
        textTransform: 'none',
        minWidth: '155px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 1px 2px #15223214',
        border: '1px solid #7070701A;',
        '&:hover': {
            background: '#fff'
        }
    },
    popper: {
        zIndex: 9
    },
    formControl: {
        '& .MuiPaper-root': {
            boxShadow: '0px 1px 2px #15223214',
            border: "1px solid #7070701A",
        }
    },
    itemSelect: {
        fontSize: 13,
        paddingTop: 10,
        paddingBottom: 10,
        '&  span:first-child': {
            color: '#000'
        },
        '& span:last-child': {
            color: '#00000080',
            fontSize: 12
        },
        borderBottom: '1px solid #70707033',

        '&.Mui-selected span': {
            color: '#2DC98C'
        },
    },

}))
function UtilitiesItem() {
    const classes = useStyles()
    const [age, setAge] = React.useState(data[5].value)
    const [open, setOpen] = React.useState(false)

    const handleChange = (event) => {
        setAge(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    return (
        < Fragment >
            <Box position="relative" className="find">
                <Button className={classes.utilBtn} onClick={handleOpen}>
                    {age}
                    {open ? <ExpandLess className={classes.dropArrow} /> : <ExpandMore className={classes.dropArrow} />}
                </Button>
                <FormControl fullWidth style={{ position: "absolute", left: 0, top: 0, zIndex: -9 }} className={`${classes.formControl} wereereererereeererere`}>
                    <Select
                        className={classes.select}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "left"
                            },
                            getContentAnchorEl: null
                        }}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        onChange={handleChange}
                    >
                        {data.map(({ value, aviableRes }) =>
                        (<MenuItem key={value} className={classes.itemSelect} value={value}>
                            <Box component="span" display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <span>{value}</span>
                                <span>{aviableRes}</span>
                            </Box>
                        </MenuItem>))}
                    </Select>
                </FormControl>
            </Box>
        </Fragment>
    )
}

export default UtilitiesItem
