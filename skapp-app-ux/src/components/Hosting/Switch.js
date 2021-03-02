import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'


const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#2DC98C',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#2DC98C',
            border: '4px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    )
})


export default function CustomizedSwitches() {
    const [state, setState] = React.useState({
        checkedB: true,
    })
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }
    return (
        <FormGroup>

            <FormControlLabel style={{ color: '#5A607F', marginBottom: 5 }}
                label="Upload File"
                control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}

            />

        </FormGroup>
    )
}
