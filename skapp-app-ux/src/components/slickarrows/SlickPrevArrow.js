import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Button } from '@material-ui/core'

const SlickPrevArrow = ({ onClick }) => {
    return (
        <Button onClick={onClick} className="tagButton slickPrev">
            <ArrowBackIosIcon />
        </Button>
    )
}

export default SlickPrevArrow
