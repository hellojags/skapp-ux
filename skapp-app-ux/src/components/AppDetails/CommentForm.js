import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Button, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    textarea: {
        background: '#fff',
        boxShadow: '0px 1px 2px #15223214',
        border: '1px solid #7070701A',
        borderRadius: '5px',
        // minHeight: '90px',
        width: `100%`,
        maxWidth: '740px',
        resize: 'none',
        padding: "1rem",
        color: 'rgba(126, 132, 163 , 1)',
        '&:focus': {
            outline: 'none!important',
            border: '1px solid #1DBF73',
        },
        '&:placeholder': {
            color: 'rgba(126, 132, 163 , .32)'
        },
        '&::-webkit-input-placeholder': {
            color: 'rgba(126, 132, 163 , .32)'
        }
        ,
        "&:-moz-placeholder": { /* Firefox 18- */
            color: 'rgba(126, 132, 163 , .32)'
        }
        ,
        "&::-moz-placeholder": {  /* Firefox 19+ */
            color: 'rgba(126, 132, 163 , .32)'
        }
        ,
        " &:-ms-input-placeholder": {
            color: 'rgba(126, 132, 163 , .32)'
        }
        ,
        "&::placeholder": {
            color: 'rgba(126, 132, 163 , .32)'
        },
        marginTop: '1rem'
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
        marginTop: '1rem',
        '@media only screen and (max-width: 575px)': {
            margin: 'auto',
            marginTop: '.2rem',
        },
    }
})
const CommentForm = () => {
    const classes = useStyles()
    return (
        <form>
            <TextareaAutosize className={classes.textarea} aria-label="minimum height" rowsMin={4} placeholder="Write your Comment" />
            <Button className={classes.button}>Submit</Button>
        </form>
    )
}

export default CommentForm
