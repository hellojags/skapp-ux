import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Button } from '@material-ui/core'
const SlickNextArrow = ({ onClick }) => {
    return (
        <Button onClick={onClick} className="tagButton slickNex">
            <ArrowForwardIosIcon />
        </Button>
    )
}

export default SlickNextArrow
